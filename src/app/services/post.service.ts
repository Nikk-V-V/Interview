import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getById(postId): any {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  getCommentsByPostId(postId): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }

}
