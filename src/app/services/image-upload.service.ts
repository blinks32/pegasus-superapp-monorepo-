import { Injectable } from '@angular/core';
import { getStorage, ref, uploadString, getDownloadURL } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { Photo } from '@capacitor/camera';
import { Auth } from '@angular/fire/auth';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  private storage = getStorage();
  private firestore = getFirestore();

  constructor(private auth: Auth) {}

  // This method handles the image upload process
  async uploadImage(cameraFile: Photo): Promise<string | null> {
    const userId = this.auth.currentUser?.uid;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    const storageRef = ref(this.storage, `avatars/${userId}/${uuidv4()}`);
    try {
      await uploadString(storageRef, cameraFile.base64String!, 'base64');
      return await getDownloadURL(storageRef);
    } catch (e) {
      console.error('Error uploading image:', e);
      return null;
    }
  }

  // New 'upload' method to match the usage in your component
  async upload(base64Image: string): Promise<string | null> {
    const photo: Photo = {
      base64String: base64Image,
      format: 'jpeg',  // Assuming JPEG format; adjust if needed
    } as Photo;  // Casting to 'Photo' since it's a partial object

    return await this.uploadImage(photo);
  }
}
