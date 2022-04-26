import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  Users: any;
  category: any;
  searchText = '';
  @ViewChild('searchbar')
  searchbar!: ElementRef;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getallpost().subscribe((data:any)=>{
      this.Users =data
      console.log(this.Users);

      this.Users.map((data:any)=>{
        data.post_category.map((p:any)=>{
          this.category = p
          console.log("p",p);
          
        })

      })
      
    })
  }
  openpost(element:any){
    this.router.navigate(['/app/post-content', + element.post_id]);

  }

}