import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Comment} from'src/app/models/comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url ='https://localhost:44304/';
  private urlComment ='api/comment/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getCommentList():Observable<Comment[]>{
    return this.http.get<Comment[]>(this.url+this.urlComment);
  }
  deleteComment(id: number):Observable<Comment>{
    return this.http.delete<Comment>(this.url+this.urlComment+id);
  }
  saveComment(comment: Comment): Observable<Comment>{
    return this.http.post<Comment>(this.url + this.urlComment,comment, this.httpOptions);
  }
  loadComment(id:number):  Observable<Comment>{
    return this.http.get<Comment>(this.url + this.urlComment + id);
  }

  updateComment(id: number, comment: Comment): Observable<Comment>{
    return this.http.put<Comment>(this.url + this.urlComment + id,comment,this.httpOptions);
  }

}
