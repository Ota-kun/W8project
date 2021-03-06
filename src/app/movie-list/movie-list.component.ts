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