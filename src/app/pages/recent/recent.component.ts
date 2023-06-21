import { Component } from '@angular/core';
import { weatherInfo } from 'src/app/constants/constants';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent {
  public recentSearch: any = [];
  public likedDatas: any = [];
  isPopup: boolean = false;
  public weatherInfoConst: any = weatherInfo;
  public popupTexts: any = {
    text: 'Are you sure want to remove all the Searches?',
    button1: 'YES',
    button2: 'NO',
  };

  constructor(private storageService: StorageServiceService) {}

  ngOnInit() {
    let searchedCities = this.storageService.getItem('recent') || '[]';
    this.recentSearch = JSON.parse(searchedCities);
    console.log("recentSearch:", this.recentSearch)

    let likedCities = this.storageService.getItem('likedItems') || '[]';
    this.likedDatas = JSON.parse(likedCities);
  }

  deleteAll() {
    localStorage.removeItem("recent")
    this.recentSearch = [];
    this.togglePopUp();
  }

  togglePopUp() {
    this.isPopup = !this.isPopup;
  }

  isLiked(item:any) {
    if (this.likedDatas.find((likedCity: any) => item.location.name === likedCity.location.name)) {
      return 'fas fa-heart';
    } else {
      return 'far fa-heart';
    }
  }

  getImage(tx:any) {
    return this.weatherInfoConst[tx] ? this.weatherInfoConst[tx].img : this.weatherInfoConst["sunny"].img;
  }
}
