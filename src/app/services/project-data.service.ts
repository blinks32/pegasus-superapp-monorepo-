import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  private projectData = new BehaviorSubject<any>(null);
  projectData$ = this.projectData.asObservable();

  setProjectData(data: any) {
    this.projectData.next(data);
  }
}
