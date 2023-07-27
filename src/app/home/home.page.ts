import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  url: string = 'http://127.0.0.1:8081/';
  private accessToken = 'your-access-token';

  GET_Request(): void {
    const headers = new HttpHeaders({
      'User-id': 'ifabula',
      scope: 'user',
    }).set('Authorization', `Bearer ${this.accessToken}`);

    this.http.get(this.url + 'get', { headers }).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  GET_Request_Invalid(): void {
    const headers = new HttpHeaders({
      'User-id': 'Ken',
      scope: 'aplikasi',
    }).set('Authorization', `Bearer ${this.accessToken}`);

    this.http.get(this.url + 'get', { headers }).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  POST_Request(): void {
    const headers = new HttpHeaders({
      'User-id': 'ifabula',
      scope: 'user',
    }).set('Authorization', `Bearer ${this.accessToken}`);

    this.http.post(this.url + 'post', headers).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
