import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { weatherInfo } from 'src/app/constants/constants';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent {
  public favItems: any = [];
  isPopup: boolean = false;
  public weatherInfoConst: any = weatherInfo;
  public popupTexts: any = {
    text: 'Are you sure want to remove all the favourites?',
    button1: 'YES',
    button2: 'NO',
  };
  constructor(private storageService: StorageServiceService) {}

  ngOnInit() {
    let searchedCities = this.storageService.getItem('likedItems') || '[]';
    this.favItems = JSON.parse(searchedCities);
  }

  deleteAll() {
    localStorage.removeItem("likedItems")
    this.favItems = [];
    this.togglePopUp();
  }

  togglePopUp() {
    this.isPopup = !this.isPopup;
  }

  getImage(tx:any) {
    return this.weatherInfoConst[tx] ? this.weatherInfoConst[tx].img : this.weatherInfoConst["sunny"].img;
  }

}

