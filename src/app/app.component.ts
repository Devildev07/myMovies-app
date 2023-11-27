import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { CommonService } from './services/common-service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  superAdminEmail: any;
  themeToggle = false;
  public appPages = [
    { title: 'Movies', url: '/home', icon: 'film' },
    { title: 'Profile', url: '/profile', icon: 'person' },
    { title: 'Favorite', url: '/favorite', icon: 'heart' },
    // { title: 'Add Movies', url: '/add-movies', icon: 'add',},
  ];
  constructor(
    public authService: AuthService,
    public router: Router,
    public commonService: CommonService
  ) {
    this.superAdminEmail = this.authService.userEmail;
    console.log('superAdminEmail', this.superAdminEmail);
    if (this.authService.userEmail === 'dewanshusingh21@gmail.com') {
      this.appPages.push({
        title: 'Add Movies',
        url: '/add-movies',
        icon: 'add',
      });
    }
  }

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark theme based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) =>
      this.initializeDarkTheme(mediaQuery.matches)
    );
  }

  // Check/uncheck the toggle and update the theme based on isDark
  initializeDarkTheme(isDark: boolean | any) {
    this.themeToggle = isDark;
    this.toggleDarkTheme(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark theme
  toggleChange(ev: any) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  // Add or remove the "dark" class on the document body
  toggleDarkTheme(shouldAdd: boolean | undefined) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  // logout
  async logOut() {
    this.authService.signOutUser().then(() => {
      this.authService.isUserLogin = false;
      this.router.navigate(['/login']);
      this.commonService.removeLocalStorage('userData');
    });
  }
}
