import { Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.init();
    this.seo.setWebsiteSchema();
    this.seo.setOrganizationSchema();
  }
}
