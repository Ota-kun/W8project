import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '../../../node_modules/@angular/forms';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-rate-movie',
  templateUrl: './rate-movie.component.html',
  styleUrls: ['./rate-movie.component.css']
})

export class RateMovieComponent implements OnInit {
  // Username;
  title;
  year;
  genre;
  duration;
  director;
  cast;
  description;
  rating;
  data;
  
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {

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

    this.http.post('http://localhost:40252/api/movieinfoes', JSON.stringify(this.data), { headers: { 'Content-Type': 'application/json' } }).toPromise(),
    this.toastr.success('New rating added successfully', 'Movie Registered');

  }
}