import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserBehaviorService {
  private preferences: any;
  private recentInteractions: any[] = [];

  constructor() {
    this.loadUserPreferences();
    this.loadRecentInteractions();
  }

  // Example method to load user preferences (e.g., from localStorage or a backend)
  private loadUserPreferences() {
    // This is a placeholder. Replace with actual loading logic.
    this.preferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');
  }

  // Example method to save user preferences
  saveUserPreferences(preferences: any) {
    this.preferences = preferences;
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  }

  // Example method to get user preferences
  getPreferences() {
    return this.preferences;
  }

  // Example method to track and add a recent interaction
  addRecentInteraction(interaction: any) {
    this.recentInteractions.push(interaction);
    this.saveRecentInteractions();
  }

  // Example method to get recent interactions
  getRecentInteractions() {
    return this.recentInteractions;
  }

  // Example method to load recent interactions (e.g., from localStorage or a backend)
  private loadRecentInteractions() {
    this.recentInteractions = JSON.parse(localStorage.getItem('recentInteractions') || '[]');
  }

  // Example method to save recent interactions
  private saveRecentInteractions() {
    localStorage.setItem('recentInteractions', JSON.stringify(this.recentInteractions));
  }

  // Additional methods can be added here for more specific user behaviors, like tracking
  // page views, clicks, UI customization settings, etc.
}
