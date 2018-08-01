import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  data;
  title = 'Movies';
  results = '';

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get('http://localhost:40252/Api/Movieinfoes/').subscribe(data => {
      console.log(data);
      this.data=data;

    });
  }
}