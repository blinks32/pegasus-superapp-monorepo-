import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, setDoc, updateDoc, deleteDoc, docData, CollectionReference, DocumentData, serverTimestamp, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { v4 as uuidv4 } from 'uuid'; // Importing UUID library
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private userProjectsCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore, private auth: Auth) {}

  private getUserProjectsCollection(userId: string): CollectionReference<DocumentData> {
    return collection(this.firestore, `users/${userId}/projects`);
  }

  getProjects(): Observable<any[]> {
    const userId = this.auth.currentUser?.uid;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    this.userProjectsCollection = this.getUserProjectsCollection(userId);
    return collectionData(this.userProjectsCollection, { idField: 'id' }).pipe(
      map((data: any[]) => data.map(doc => ({ id: doc.id, ...doc })))
    );
  }

  getProjectById(id: string): Observable<any> {
    const userId = this.auth.currentUser?.uid;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    const projectDoc = doc(this.getUserProjectsCollection(userId), id);
    return docData(projectDoc, { idField: 'id' }).pipe(
      map(doc => ({ id: doc.id, ...doc }))
    );
  }

  async saveProject(project: any): Promise<void> {
    const userId = this.auth.currentUser?.uid;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    if (!project.id) {
      project.id = uuidv4(); // Generate a new ID if not provided
    }
    const projectDoc = doc(this.getUserProjectsCollection(userId), project.id);
    return setDoc(projectDoc, { ...project, timestamp: serverTimestamp() });
  }

  async updateProject(id: string, projectUpdates: any): Promise<void> {
    const userId = this.auth.currentUser?.uid;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    const projectDoc = doc(this.getUserProjectsCollection(userId), id);
    return updateDoc(projectDoc, { ...projectUpdates, timestamp: serverTimestamp() });
  }

  async deleteProject(id: string): Promise<void> {
    const userId = this.auth.currentUser?.uid;
    if (!userId) {
      throw new Error('User not authenticated');
    }
    const projectDoc = doc(this.getUserProjectsCollection(userId), id);
    return deleteDoc(projectDoc);
  }

  // Store the conversation inside a project
  async getConversation(userId: string, projectId: string): Promise<{ user: string; message: string }[]> {
    const projectDoc = doc(this.getUserProjectsCollection(userId), projectId);
    const projectSnapshot = await getDoc(projectDoc);
    return projectSnapshot.exists() ? (projectSnapshot.data().conversation as { user: string; message: string }[]) : [];
  }

  async saveConversation(userId: string, projectId: string, conversation: { user: string; message: string }[]): Promise<void> {
    const projectDoc = doc(this.getUserProjectsCollection(userId), projectId);
    return updateDoc(projectDoc, { conversation: conversation, timestamp: serverTimestamp() });
  }

  async deleteConversation(userId: string, projectId: string): Promise<void> {
    const projectDoc = doc(this.getUserProjectsCollection(userId), projectId);
    return updateDoc(projectDoc, { conversation: [], timestamp: serverTimestamp() });
  }
}
