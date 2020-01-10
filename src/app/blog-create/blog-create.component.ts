import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"]

  constructor(private blogHttpService: BlogHttpService,
              private _route: ActivatedRoute,
              private router: Router,
              vcr: ViewContainerRef) {
                // this.toasterService = toasterService ;
               }

  ngOnInit() {
  }

  public createBlog(): any {

    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }
    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe (
      data => {
        console.log("Blog Created")
        console.log(data);
        // this.toasterService.pop('success','Blog Posted Successfully', 'Success');
        alert('Blog Posted Successfully');
        setTimeout(() => {
          this.router.navigate(['/blog', data.data.blogId]);
        }, 1000)
      },
      error => {
        console.log("Some error occurred");
        console.log(error.errorMessage);
        // this.toasterService.pop('warning','Some error occured', 'Error')
        alert("some error occured")
      }
    )
  }

}
