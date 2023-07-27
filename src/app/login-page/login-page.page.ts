import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})

export class LoginPagePage {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  ionViewDidEnter() {
    this.checkLoginStatus();
  }

  login() {
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);

    this.checkLoginStatus();
  }

  logout() {
    // Clear localStorage when logging out
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    this.checkLoginStatus();
  }

  private checkLoginStatus() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    this.isLoggedIn = !!(username && password);

    if (this.isLoggedIn) {
      this.username = username!;
    } else {
      this.username = '';
      this.password = '';
    }
  }

}
