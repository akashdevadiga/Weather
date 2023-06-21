import { Component, OnInit } from '@angular/core';
import { weatherInfo } from 'src/app/constants/constants';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public weatherData: any;
  public tempcfval: string = 'f';
  public isLiked: boolean = false;
  public weatherInfoConst: any = weatherInfo;

  constructor(
    private weather_S: WeatherService,
    private storageService: StorageServiceService
  ) {}

  ngOnInit() {
    // this.weather_S.search('udupi');
    this.weather_S.searchResults.subscribe((data: any) => {
      this.weatherData = data;
      let likedItems:any =  this.storageService.getItem("likedItems") || '[]';
      likedItems = JSON.parse(likedItems);
      this.isLiked = likedItems.findIndex((item: any) => item.location.name === this.weatherData.location.name) > -1 ? true : false;
    });
  }

  tempCF(arg: any) {
    if (arg === 'c') this.tempcfval = 'c';
    else this.tempcfval = 'f';
  }

  toggleLike() {
    let likedItems: any = this.storageService.getItem("likedItems") || '[]';
    likedItems = JSON.parse(likedItems);
    let i = likedItems.findIndex((item: any) => item.location.name === this.weatherData.location.name)
    if(i > -1){
      likedItems = likedItems.filter((item: any) => item.location.name !== this.weatherData.location.name);
    }else {
      likedItems.push(this.weatherData);
    }
    this.storageService.setItem("likedItems", likedItems).then((res) => {
      this.isLiked = !this.isLiked;
    });
  }

  getImage(tx:any) {
    return this.weatherInfoConst[tx] ? this.weatherInfoConst[tx].img : this.weatherInfoConst["sunny"].img;
  }
}
