import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Observable, interval, of } from 'rxjs';
import { switchMap, takeWhile, map, catchError, startWith } from 'rxjs/operators';

export interface BuildStatus {
  id: string;
  product_id: string;
  product_name: string;
  status: 'configuring' | 'compiling' | 'success' | 'failed' | 'not_found';
  timestamp: string;
  updatedAt?: string;
  prompt: string;
  downloadUrl?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiBuildService {
  private http = inject(HttpClient);
  private auth = inject(AuthService);
  private baseUrl = environment.workerUrl;

  private getEffectiveUserId(): string {
    const user = this.auth.currentUser();
    if (user) return user.uid;
    
    // Fallback to a persistent session ID for guests
    let guestId = localStorage.getItem('ais_guest_id');
    if (!guestId) {
      guestId = `guest_${crypto.randomUUID()}`;
      localStorage.setItem('ais_guest_id', guestId);
    }
    return guestId;
  }

  triggerBuild(productId: string, productName: string, prompt: string, baseSchema: string): Observable<any> {
    const userId = this.getEffectiveUserId();
    const payload = {
      product_id: productId,
      product_name: productName,
      user_id: userId,
      user_prompt: prompt,
      base_schema: baseSchema,
      forbidden_fields: ['id', 'author', 'license'], // Example forbidden fields
      guardrails: 'Ensure the theme fits a luxury aesthetic and the base fare is reasonable.'
    };

    return this.http.post(`${this.baseUrl}/build`, payload);
  }

  getBuildStatus(buildId: string): Observable<BuildStatus> {
    const userId = this.getEffectiveUserId();
    return this.http.get<BuildStatus>(`${this.baseUrl}/status?user_id=${userId}&build_id=${buildId}`);
  }

  getHistory(): Observable<BuildStatus[]> {
    const userId = this.getEffectiveUserId();
    return this.http.get<BuildStatus[]>(`${this.baseUrl}/history?user_id=${userId}`).pipe(
      catchError(() => of([]))
    );
  }

  pollBuildStatus(buildId: string): Observable<BuildStatus> {
    return interval(3000).pipe(
      startWith(0),
      switchMap(() => this.getBuildStatus(buildId)),
      takeWhile(status => status.status !== 'success' && status.status !== 'failed' && status.status !== 'not_found', true)
    );
  }
}
