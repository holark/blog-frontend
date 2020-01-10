import { Injectable } from '@angular/core';
// importing http client to make the requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = "MmY0ZmRkN2Y2NDBiOWI1Y2FkOTMxZDczMWM4ZjU0Y2Y1ZGM5MDYwYTRhZjRmZDU3YmQ4MzA3MDkwNzNlOWUzMzgxMzhjNTMxY2NhZmRjZWNiN2YzZDFhZmRkOGE2MzA0NDliMTI4MzUxNDczYjkxMjhkZTIzNmY4MTdmODRmNjUxMQ==";

  constructor(private _http:HttpClient ) {
    console.log("blog-http service was called");
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + '/all?authToken='+this.authToken);
    console.log(myResponse);
    return myResponse;

  }

  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken)
    return myResponse;
  }


  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse;
  }

  public deleteBlog(blogId): any {
    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, blogId);
    return myResponse;
  }

  public editBlog(blogId, blogData): any {
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken' + this.authToken, blogData);
    return myResponse;
  }

}
