import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styles: [`:host { display: block; min-height: 100vh; }`],
})
export class AppComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.init();
    this.seo.setWebsiteSchema();
    this.seo.setOrganizationSchema();
  }
}
