import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit {
  ID: any;
  // titulo: string;
  // descripcion: string;
   PostContent: any;
   post_content:any;
   post_title:any;
  description: any;
  title: any;
  constructor(private service:ServiceService, private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.ID = this.activatedRoute.snapshot.paramMap.get('ID')
    this.post_content = this.activatedRoute.snapshot.paramMap.get('post_content')
    this.post_title = this.activatedRoute.snapshot.paramMap.get('post_title')
this.viewdetails();
    
  }
viewdetails(){
  this.service.getcontent().subscribe((data:any)=>{
    this.PostContent= data.data
    this.PostContent.map((p:any)=>{
      if(p.ID == this.ID){
        this.title = p.post_title
        this.description = p.post_content
      }
    })
    console.log(this.PostContent);
    
  })
}

}
