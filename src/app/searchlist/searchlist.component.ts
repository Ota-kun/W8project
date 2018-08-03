import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchdataService } from '../searchdata.service';
import { Router, NavigationEnd } from '@angular/router';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent implements OnInit, OnDestroy {

  searchData;

  // START OF ADDED
  navigationSubscription;
  constructor(public movieServiceData: MovieService, public dataService: SearchdataService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }
  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.searchData = this.dataService.serviceData;
  }
  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we  
    // don't then we will continue to run our initialiseInvites()   
    // method on every navigationEnd event.
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  // END OF ADDED

  ngOnInit() {
    this.searchData = this.dataService.serviceData;
  }

  onClick(event) {
    this.movieServiceData.movie = event.target.text;
  }

}