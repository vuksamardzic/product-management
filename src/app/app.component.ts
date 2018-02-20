import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationError, NavigationCancel, NavigationEnd } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    } else if (
      routerEvent instanceof NavigationError ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationEnd
    ) {
      this.loading = false;
    }
  }

  logOut(): void {
    this.router.navigateByUrl('/home');
  }
}