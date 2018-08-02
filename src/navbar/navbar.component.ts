import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchdataService } from 'src/app/searchdata.service';
import { Router } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  data;
  search;

  constructor(private http: HttpClient, private router: Router, public dataService: SearchdataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.serviceData = [];
    this.http.get('http://localhost:40252/Api/Movieinfoes/title/' + this.search).subscribe(data => {
      console.log(data);
      console.log("Tuli perille!");
      this.data = data;
      this.dataService.serviceData = data;

      if (this.data[0] != null) {
        this.router.navigate(['searchlist']);
      }
    });
  }
}