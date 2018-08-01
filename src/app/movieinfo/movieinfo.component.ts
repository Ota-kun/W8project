import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movieinfo',
  templateUrl: './movieinfo.component.html',
  styleUrls: ['./movieinfo.component.css']
})
export class MovieinfoComponent implements OnInit {

  data;
  title = 'Movies';
  results = '';

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  this.http.get('http://localhost:40252/Api/Movieinfoes/').subscribe(data => {
      console.log(data);
      this.data=data;
    });
  }
}
