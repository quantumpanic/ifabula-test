import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-req',
  templateUrl: './http-req.page.html',
  styleUrls: ['./http-req.page.scss'],
})
export class HttpReqPage implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {}
  posts: any[] = [];

  getPosts() {
    this.http.get<any[]>('http://jsonplaceholder.typicode.com/posts').subscribe(
      (data) => {
        this.posts = data;
        console.log('Posts:', data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  deleteRow(){
    this.posts.splice(3,1);
  }
  
  currentIndex = 0;

  deleteCellContent(){
    if (this.posts) {
      this.currentIndex = (this.currentIndex + 1) % 3;
      let key = '';
      if (this.currentIndex == 0) key = 'id';
      if (this.currentIndex == 1) key = 'title';
      if (this.currentIndex == 2) key = 'body'; 
      // this.posts[3][this.currentIndex] = '';
      this.posts[3][key] = '';
    }
  }
}
