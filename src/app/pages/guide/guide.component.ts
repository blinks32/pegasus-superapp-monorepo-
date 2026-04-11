import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

interface GuideStep {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  code?: string;
  icon: string;
  completed?: boolean;
}

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  private http = inject(HttpClient);

  setupSteps: GuideStep[] = [];
  usageSteps: GuideStep[] = [];
  
  activeTab: 'setup' | 'usage' = 'setup';
  currentStepIndex = 0;
  showAllSteps = false;
  allCompleted = false;

  get currentSteps() {
    return this.activeTab === 'setup' ? this.setupSteps : this.usageSteps;
  }

  get progress() {
    if (this.currentSteps.length === 0) return 0;
    const completedCount = this.currentSteps.filter(s => s.completed).length;
    return (completedCount / this.currentSteps.length) * 100;
  }

  ngOnInit() {
    this.http.get<any>('assets/guide-data.json').subscribe(data => {
      this.setupSteps = data.setupSteps.map((s: any) => ({ ...s, completed: false }));
      this.usageSteps = data.usageSteps.map((s: any) => ({ ...s, completed: false }));
    });
  }

  toggleStep(index: number) {
    if (this.showAllSteps) {
      this.currentSteps[index].completed = !this.currentSteps[index].completed;
    } else {
      this.currentSteps[index].completed = true;
      if (this.currentStepIndex < this.currentSteps.length - 1) {
        setTimeout(() => {
          this.currentStepIndex++;
        }, 300);
      } else {
        this.allCompleted = true;
      }
    }
  }

  setTab(tab: 'setup' | 'usage') {
    this.activeTab = tab;
    this.currentStepIndex = 0;
    this.allCompleted = false;
    // Reset completions for demo purposes or keep them? 
    // Let's keep them so the user feels progress.
  }

  toggleShowAll() {
    this.showAllSteps = !this.showAllSteps;
  }

  resetProgress() {
    this.currentSteps.forEach(s => s.completed = false);
    this.currentStepIndex = 0;
    this.allCompleted = false;
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    // Could add a toast here
  }
}
