import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostContentComponent } from './post-content/post-content.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [{path:'article', component:PostDetailsComponent},
{path:'article-content/:ID', component:PostContentComponent},
{path:'', redirectTo:'article',pathMatch:"full"}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
