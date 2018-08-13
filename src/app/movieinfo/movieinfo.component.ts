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