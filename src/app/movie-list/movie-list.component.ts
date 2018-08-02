/*

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  //
  data;
  title = 'Movies';
  results = '';
  //

  results = '';
  username;
  title;
  year;
  genre;
  duration;
  director;
  cast;
  description;
  rating;
  data;

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get('http://localhost:40252/Api/Movieinfoes').subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }

  onClick(m) {

    this.data = {
      "Username": this.username,
      "Title": this.title,
      "Year": this.year,
      "Genre": this.genre,
      "Duration": this.duration,
      "Director": this.director,
      "Cast": this.cast,
      "Description": this.description,
      "Rating": this.rating
    }

    for(let a of this.data) {
      if (a.title == m.Title) {
        a.push('http://localhost:31159//api/movieinfoes/title/{{m.Title}');
      }
      // Häikkää
      return a;
    }
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  data;
  selectedMovie;
  title = 'Movies';
  results = '';

  constructor(private http: HttpClient, public movieService: MovieService) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:40252/Api/Movieinfoes/').subscribe(data => {
      console.log(data);
      this.data = data;

    });
  }
  onClick(event) {

    this.movieService.movie = event.target.text;
  }
}