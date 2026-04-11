import { Injectable } from '@angular/core';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  private storage = getStorage();

  constructor(private auth: Auth) {}

  /**
   * General purpose upload method. Detects base64 strings and uploads to Storage.
   * If the input is already a URL, returns it as is.
   */
  async upload(data: string, path: string = 'general'): Promise<string> {
    if (!data) return '';
    
    // If it's already a URL, don't re-upload
    if (data.startsWith('http')) return data;

    // Handle data URI prefix
    let base64String = data;
    let format = 'png';
    
    if (data.includes(';base64,')) {
      const parts = data.split(';base64,');
      format = parts[0].split('/')[1]?.split(';')[0] || 'png';
      base64String = parts[1];
    }

    try {
      // Compress if it's a large image
      if (base64String.length > 200000) {
         const compressed = await this.compressImage(data, 1280, 0.7);
         if (compressed.includes(';base64,')) {
           base64String = compressed.split(';base64,')[1];
           format = 'jpeg';
         }
      }

      const userId = this.auth.currentUser?.uid || 'guest';
      const storageRef = ref(this.storage, `${path}/${userId}/${this.getUniqueId()}.${format}`);
      
      await uploadString(storageRef, base64String, 'base64', {
        contentType: `image/${format}`
      });
      
      const downloadUrl = await getDownloadURL(storageRef);
      console.log(`✅ Uploaded to Storage: ${downloadUrl}`);
      return downloadUrl;
    } catch (e) {
      console.error('Upload Error:', e);
      // Fallback to original data if upload fails (though this may cause Firestore errors if too large)
      return data;
    }
  }

  /**
   * Compresses an image in the browser using HTML5 Canvas.
   */
  private async compressImage(dataUrl: string, maxWidth: number, quality: number): Promise<string> {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) return resolve(dataUrl);
        
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => resolve(dataUrl);
      img.src = dataUrl;
    });
  }

  private getUniqueId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}

