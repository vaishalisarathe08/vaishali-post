import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private usersUrl =
    'https://contentadmin.latv.com/wp-json/v1/get-home-page-posts';
  private usersUrl2 =
    'https://contentadmin.latv.com/wp-json/v1/get-home-page-posts?page_no=3';
  private javaapi =
    'https://www.googleapis.com/books/v1/volumes?q=intitle%3AJava&maxResults=40';
  private Goslin =
    'https://www.googleapis.com/books/v1/volumes?q=inauthor%3AGoslin&maxResults=40';
  private num =
    'https://www.googleapis.com/books/v1/volumes?q=ISBN_10%3A123456&maxResults=40';
  private publisher =
    'https://www.googleapis.com/books/v1/volumes?q=inpublisher%3A&maxResults=40';


  private allpost = 'https://jsonplaceholder.typicode.com/posts';
  private allUser = 'https://jsonplaceholder.typicode.com/users';
  private postDataByID = (id: number) =>
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
  private getPostByIds = (id: number) =>
    `https://jsonplaceholder.typicode.com/posts/${id}`;

  constructor(private http: HttpClient) {}

  getjavabooks() {
    return this.http.get(this.javaapi);
  }
  getgoslin() {
    return this.http.get(this.Goslin);
  }
  getnum() {
    return this.http.get(this.num);
  }
  getpublisher() {
    return this.http.get(this.publisher);
  }

  getPost() {
    // debugger;
    return this.http.get(this.usersUrl);
  }
  getPostcommentById(id: any) {
    return this.http.get(this.postDataByID(id));
  }

  getallpost() {
    return this.http.get(this.allpost);
  }
  getPostById(id: any) {
    return this.http.get(this.getPostByIds(id));
  }

  getalluser() {
    return this.http.get(this.allUser);
  }
}
