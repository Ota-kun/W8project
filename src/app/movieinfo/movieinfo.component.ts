/*
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.css']
})
export class MovieinfoComponent implements OnInit {

  //
  data
  title = 'Movies';
  results = '';
  //

  results = '';
  title;
  year;
  genre;
  duration;
  director;
  cast;
  description;
  rating;
  data;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.http.get('http://localhost:40252/Api/Movieinfoes').subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }

  onRequest() {

    this.data = {
      // "Username": this.Username,
      "Title": this.title,
      "Year": this.year,
      "Genre": this.genre,
      "Duration": this.duration,
      "Director": this.director,
      "Cast": this.cast,
      "Description": this.description,
      "Rating": this.rating
    };
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.css']
})
export class MovieinfoComponent implements OnInit {

  selectedMovie;
  data;
  constructor(private http: HttpClient, public movieService: MovieService) { }

  ngOnInit() {
    this.selectedMovie = this.movieService.movie;
    this.http.get('http://localhost:40252/Api/Movieinfoes/title/' + this.selectedMovie).subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }

}