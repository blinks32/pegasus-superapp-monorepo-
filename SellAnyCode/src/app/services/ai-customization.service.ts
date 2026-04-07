import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AiCustomizationService {
  //private baseUrl = 'https://backend-delta-ivory-34.vercel.app';
  private baseUrl = 'http://localhost:3000';


  constructor(private http: HttpClient) {}

  async generateContent(prompt: string, context: string): Promise<string> {
    try {
      const response = await this.http.post<any>(`${this.baseUrl}/generate`, { prompt, context }).toPromise();
      console.log('Full response from generateContent:', response);

      // Accessing the nested text content
      const text = response.fullResponse?.response?.candidates[0]?.content?.parts[0]?.text;

      return text ? text : 'No content generated';
    } catch (error) {
      console.error('Error generating content:', error);
      throw error;  // Rethrow the error to handle it in the caller
    }
  }

  async generateImage(prompt: string): Promise<string> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer d4b30edbcaa609e5def2e8f63e72155edbaa66d259bd18f926cdedf63475b7c2229230f656c744859514bd3fcb89745a5ad462fb7e2e5aa57e122660a5bdf888', // Replace with actual token
    });

    try {
      const response = await this.http.post<any>(`${this.baseUrl}/generate-image`, { prompt }, { headers }).toPromise();
      console.log('Full response from generateImage:', response);

      const image = response.fullResponse?.response?.candidates[0]?.content?.parts[0]?.text;

      return image ? image : 'No image generated';
    } catch (error) {
      console.error('Error generating image:', error);
      throw error;  // Rethrow the error to handle it in the caller
    }
  }
}
