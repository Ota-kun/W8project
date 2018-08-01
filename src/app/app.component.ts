import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data;
  title = 'Movies';
  results = '';

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get('http://localhost:40252/Api/Movieinfoes/').subscribe(data => {
      console.log(data);
      this.data=data;
      interface UserResponse {
        title: string;
        description: string;
      }

    });
  }

}
