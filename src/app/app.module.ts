import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { RateMovieComponent } from './rate-movie/rate-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { CarouselComponent } from '../carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movielist', redirectTo: "localhost:40252/api/movieinfoes/", pathMatch: 'full' },
  { path: 'ratemovie', component: RateMovieComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    RateMovieComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule, 
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
