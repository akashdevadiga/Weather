import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageServiceService } from './storage-service.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public searchResults = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
    private storage: StorageServiceService
  ) {}

  search(searchTerm: string): void {
    if (searchTerm.length > 3) {
      const apiUrl = `https://api.weatherapi.com/v1/current.json?q=${searchTerm}&key=a14883ee75be40fe88f165123231906`;

      this.http.get(apiUrl).subscribe((response: any) => {
        this.searchResults.next(response);
        let recentItems: any = this.storage.getItem('recent') || '[]';
        recentItems = JSON.parse(recentItems);
        let i = recentItems.findIndex(
          (item: any) => response.location.name === item.location.name
        );
        if (i >= 0) {
          recentItems[i] = response;
        } else {
          recentItems.push(response);
        }
        this.storage.setItem('recent', recentItems);
      });
    }
  }
}
