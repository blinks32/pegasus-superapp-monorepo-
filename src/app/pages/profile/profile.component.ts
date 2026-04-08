import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthService } from '../../services/auth.service';

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
            <div class="profile-avatar">
              {{ auth.userProfile()?.displayName?.charAt(0) || 'U' }}
            </div>
            <h3 class="profile-name">{{ auth.userProfile()?.displayName || 'User' }}</h3>
            <p class="profile-email">{{ auth.userProfile()?.email }}</p>
            <p class="profile-joined">Member since {{ getJoinDate() | date:'mediumDate' }}</p>
            
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
      padding: 40px 0;
      margin-bottom: 20px;
    }
    
    .profile-hero h1 {
      margin: 0;
      color: white;
      font-size: 2rem;
    }
    
    .profile-hero p {
      color: rgba(255, 255, 255, 0.9);
      margin: 8px 0 0 0;
    }
    
    .profile-layout {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 20px;
    }
    
    @media (min-width: 769px) {
      .profile-layout {
        grid-template-columns: 300px 1fr;
        gap: 30px;
      }
    }
    
    .profile-sidebar {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-bottom: 20px;
      text-align: center;
    }
    
    .profile-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: white;
      font-weight: bold;
      margin: 0 auto 16px;
    }
    
    .profile-name {
      margin: 0 0 8px 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #333;
    }
    
    .profile-email {
      color: #666;
      margin: 0 0 8px 0;
      font-size: 0.9rem;
      word-break: break-word;
      overflow-wrap: break-word;
    }
    
    .profile-joined {
      color: #888;
      font-size: 0.85rem;
      margin: 0 0 24px 0;
    }
    
    .profile-stats {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .stat-item {
      text-align: center;
      flex: 1;
      min-width: 80px;
    }
    
    .stat-value {
      font-size: 1.25rem;
      font-weight: bold;
      color: #667eea;
      display: block;
    }
    
    .stat-label {
      font-size: 0.75rem;
      color: #666;
      display: block;
    }
    
    .profile-content {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .profile-section {
      margin-bottom: 30px;
    }
    
    .profile-section h2 {
      margin: 0 0 15px 0;
      font-size: 1.25rem;
      color: #333;
    }
    
    .profile-info {
      display: grid;
      gap: 10px;
    }
    
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      flex-wrap: wrap;
    }
    
    .info-label {
      font-weight: 600;
      color: #555;
      font-size: 0.9rem;
    }
    
    .info-value {
      color: #333;
      font-size: 0.9rem;
      text-align: right;
      word-break: break-word;
    }
    
    .rank-badge {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      display: inline-block;
    }
    
    .activity-summary {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
      margin-top: 15px;
    }
    
    @media (min-width: 480px) {
      .activity-summary {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }
    }
    
    .activity-item {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
    }
    
    .activity-icon {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }
    
    .activity-title {
      font-weight: 600;
      margin-bottom: 5px;
      font-size: 0.9rem;
    }
    
    .activity-count {
      font-size: 1.25rem;
      font-weight: bold;
      color: #667eea;
    }
    
    .recent-activity {
      margin-top: 15px;
    }
    
    .activity-item {
      display: flex;
      align-items: center;
      padding: 12px;
      background: #f8f9fa;
      border-radius: 8px;
      margin-bottom: 10px;
    }
    
    .activity-item .activity-icon {
      font-size: 1.25rem;
      margin-right: 12px;
      flex-shrink: 0;
    }
    
    .activity-time {
      font-size: 0.8rem;
      color: #666;
    }
    
    @media (max-width: 768px) {
      .profile-hero {
        padding: 30px 0;
      }
      
      .profile-hero h1 {
        font-size: 1.75rem;
      }
      
      .profile-sidebar {
        padding: 20px;
      }
      
      .profile-avatar {
        width: 70px;
        height: 70px;
        font-size: 1.75rem;
      }
      
      .profile-name {
        font-size: 1.1rem;
      }
      
      .profile-email {
        font-size: 0.85rem;
      }
      
      .profile-joined {
        font-size: 0.8rem;
      }
      
      .profile-stats {
        flex-direction: column;
        align-items: center;
        gap: 15px;
      }
      
      .stat-item {
        min-width: auto;
      }
      
      .info-row {
        flex-direction: column;
        gap: 5px;
      }
      
      .info-label, .info-value {
        width: 100%;
        text-align: left;
      }
      
      .info-value {
        text-align: left;
        margin-top: 5px;
      }
    }
    
    @media (min-width: 769px) {
      .profile-layout {
        grid-template-columns: 300px 1fr;
        gap: 30px;
      }
      
      .profile-sidebar {
        padding: 30px;
      }
      
      .profile-avatar {
        width: 100px;
        height: 100px;
        font-size: 2.5rem;
      }
      
      .profile-name {
        font-size: 1.5rem;
      }
      
      .profile-email {
        font-size: 0.95rem;
      }
      
      .profile-joined {
        font-size: 0.9rem;
      }
      
      .profile-stats {
        flex-direction: row;
        justify-content: space-around;
      }
      
      .activity-summary {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `]
})
export class ProfileComponent implements OnInit {
  auth = inject(AuthService);
  
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