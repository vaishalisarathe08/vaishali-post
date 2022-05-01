import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  @Output() PostDataValues = new EventEmitter<string>();
  Posts: any;
  AllUser: any;
  TotalPost: any;
  Loader: boolean = true;
  category: any;
  TotalActivePost: number = 10;
  searchText = '';
  @ViewChild('searchbar')
  searchbar!: ElementRef;
 
  

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getallpost().subscribe((allPostData: any) => {
      if (allPostData) {
        this.service.getalluser().subscribe((allUsers: any) => {
          allPostData.map((postData: any) => {
            let userData = allUsers.filter(
              (userData: any) => userData.id == postData.userId
            );
            postData.user = userData[0];
            return postData;
          });
          this.TotalPost = allPostData;
          let temp = allPostData.slice(0, this.TotalActivePost);
          this.Posts = temp;
          this.Loader = false;
          /* console.log('useraa', allPostData);
          this.AllUser = allUsers;
          this.Loader = false; */
        });
      }
    });
  }
  openpost(postId: number, post: any) {
    this.router.navigate(['article-content', +postId]);
  }

  handleLoadMore(TotalActivePost: number) {
    this.Loader = true;
    this.TotalActivePost = TotalActivePost + 10;
    let temp = this.TotalPost.slice(0, this.TotalActivePost);
    this.Posts = temp;
    this.Loader = false;
  }
}
