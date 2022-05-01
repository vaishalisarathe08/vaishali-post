import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss'],
})
export class PostContentComponent implements OnInit {
 
  ID: any;
  // titulo: string;
  // descripcion: string;
  PostContent: any;
  post_content: any;
  post_title: any;
  description: any;
  title: any;
  Loader: boolean = true;
  constructor(
    private service: ServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ID = this.activatedRoute.snapshot.paramMap.get('ID');
    this.post_content =
      this.activatedRoute.snapshot.paramMap.get('post_content');
    this.post_title = this.activatedRoute.snapshot.paramMap.get('post_title');
    this.viewdetails();
   
  }
  viewdetails() {
    this.service.getPostById(this.ID).subscribe((postData:any)=>{
      if(postData){
        this.service.getPostcommentById(this.ID).subscribe((postComment: any) => {
          this.PostContent = postData
          this.PostContent.comments = postComment
          this.Loader=false;
        });
      }
      
    })
  }
}
