import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthService } from '../../services/auth.service';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <div class="profile-container">
      <div class="profile-hero">
        <div class="pm-container">
          <h1 class="pm-heading-lg">My Profile</h1>
          <p class="pm-text-secondary">View and manage your profile information</p>
        </div>
      </div>

      <div class="pm-container">
        <div class="profile-layout">
          <!-- Sidebar -->
          <div class="profile-sidebar">
            <div class="profile-card">
              <div class="profile-avatar">
                <div class="avatar-large">
                  {{ auth.userProfile()?.displayName?.charAt(0) || 'U' }}
                </div>
                <h3>{{ auth.userProfile()?.displayName || 'User' }}</h3>
                <p class="profile-email">{{ auth.userProfile()?.email }}</p>
                <p class="profile-joined">Member since {{ getJoinDate() | date:'mediumDate' }}</p>
              </div>
              
              <div class="profile-stats">
                <div class="stat-item">
                  <div class="stat-value">0</div>
                  <div class="stat-label">Assets Bought</div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">0</div>
                  <div class="stat-label">Reviews</div>
                </div>
                <div class="stat-item">
                  <div class="stat-value">0</div>
                  <div class="stat-label">Rank</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Content -->
          <div class="profile-content">
            <div class="profile-section">
              <h2 class="pm-heading-md">Profile Information</h2>
              <div class="profile-info">
                <div class="info-row">
                  <span class="info-label">Full Name:</span>
                  <span class="info-value">{{ auth.userProfile()?.displayName || 'Not set' }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Email:</span>
                  <span class="info-value">{{ auth.userProfile()?.email || 'Not set' }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Member Since:</span>
                  <span class="info-value">{{ getJoinDate() | date:'longDate' }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">User Rank:</span>
                  <span class="info-value rank-badge">Beginner</span>
                </div>
              </div>
            </div>

            <div class="profile-section">
              <h2 class="pm-heading-md">Activity Summary</h2>
              <div class="activity-summary">
                <div class="activity-item">
                  <div class="activity-icon">🛒</div>
                  <div>
                    <div class="activity-title">Assets Purchased</div>
                    <div class="activity-count">0 assets</div>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-icon">⭐</div>
                  <div>
                    <div class="activity-title">Reviews Written</div>
                    <div class="activity-count">0 reviews</div>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-icon">🏆</div>
                  <div>
                    <div class="activity-title">Current Rank</div>
                    <div class="activity-count">Beginner</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="profile-section">
              <h2 class="pm-heading-md">Recent Activity</h2>
              <div class="recent-activity">
                <div class="activity-item">
                  <div class="activity-icon">📱</div>
                  <div>
                    <div class="activity-title">Joined SellJustCode</div>
                    <div class="activity-time">{{ getJoinDate() | date:'medium' }}</div>
                  </div>
                </div>
                <div class="activity-item">
                  <div class="activity-icon">👤</div>
                  <div>
                    <div class="activity-title">Profile Created</div>
                    <div class="activity-time">Account created successfully</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    .profile-hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 60px 0;
      margin-bottom: 40px;
    }
    
    .profile-hero h1 {
      margin: 0;
      color: white;
    }
    
    .profile-hero p {
      color: rgba(255, 255, 255, 0.9);
      margin: 8px 0 0 0;
    }
    
    .profile-layout {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 40px;
      margin-top: 40px;
    }
    
    .profile-sidebar {
      background: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .profile-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      color: white;
      font-weight: bold;
      margin: 0 auto 20px;
    }
    
    .profile-avatar-initial {
      font-size: 2rem;
      font-weight: bold;
    }
    
    .profile-name {
      text-align: center;
      margin: 20px 0 5px;
      font-size: 1.5rem;
      font-weight: 600;
    }
    
    .profile-email {
      color: #666;
      text-align: center;
      margin-bottom: 20px;
    }
    
    .profile-stats {
      display: flex;
      justify-content: space-around;
      margin-top: 30px;
    }
    
    .stat-item {
      text-align: center;
    }
    
    .stat-value {
      font-size: 1.5rem;
      font-weight: bold;
      color: #667eea;
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: #666;
    }
    
    .profile-content {
      background: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .profile-section {
      margin-bottom: 30px;
    }
    
    .profile-section h2 {
      margin-bottom: 20px;
      color: #333;
    }
    
    .profile-info {
      display: grid;
      gap: 15px;
    }
    
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    }
    
    .info-label {
      font-weight: 600;
      color: #555;
    }
    
    .info-value {
      color: #333;
    }
    
    .rank-badge {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
    }
    
    .activity-summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    
    .activity-item {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }
    
    .activity-icon {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    
    .activity-title {
      font-weight: 600;
      margin-bottom: 5px;
    }
    
    .activity-count {
      font-size: 1.5rem;
      font-weight: bold;
      color: #667eea;
    }
    
    .recent-activity {
      margin-top: 20px;
    }
    
    .activity-item {
      display: flex;
      align-items: center;
      padding: 15px;
      background: #f8f9fa;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    
    .activity-item .activity-icon {
      font-size: 1.5rem;
      margin-right: 15px;
    }
    
    .activity-time {
      font-size: 0.875rem;
      color: #666;
    }
  `]
})
export class ProfileComponent implements OnInit {
  auth = inject(AuthService);
  firestore = inject(Firestore);
  
  userData: any = null;
  userStats = {
    assetsBought: 0,
    reviews: 0,
    rank: 'Beginner'
  };

  ngOnInit() {
    this.loadUserData();
  }

  getJoinDate(): Date {
    if (this.auth.userProfile()?.createdAt) {
      return new Date(this.auth.userProfile()!.createdAt);
    }
    return new Date(); // Fallback to current date if not available
  }

  async loadUserData() {
    // In a real app, you would fetch user-specific data here
    // For now, we'll use mock data
    this.userStats = {
      assetsBought: 0,
      reviews: 0,
      rank: 'Beginner'
    };
  }
}