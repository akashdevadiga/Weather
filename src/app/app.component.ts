import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'weather';

  searchTerm: string = "";
  searchResults: any;
  sideNav: boolean = false;
  splash: boolean = false;

  constructor(private http: HttpClient, private weather_S: WeatherService) { }


  ngOnInit() {
    this.splash = true;
    this.weather_S.search('udupi');
    this.weather_S.searchResults.subscribe((data: any) => {
      this.searchResults = data;
    });
    setTimeout(() => {
      this.splash = false;
    }, 2000);
  }

  search(): void {
    this.weather_S.search(this.searchTerm);
  }

  toggleSideNav() {
    this.sideNav = !this.sideNav;
  }
}
