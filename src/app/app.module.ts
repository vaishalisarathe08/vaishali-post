import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import { JwPaginationModule } from 'jw-angular-pagination';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { ServiceService } from './service.service';
import { PostContentComponent } from './post-content/post-content.component';
import { FilterPipe } from './post-details/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostContentComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgxPaginationModule,
    MatIconModule,
    // MatPaginatorModule,
    // JwPaginationModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  exports: [PostDetailsComponent, MatGridListModule],
  providers: [ServiceService],
  bootstrap: [AppComponent, PostDetailsComponent],
})
export class AppModule {}
