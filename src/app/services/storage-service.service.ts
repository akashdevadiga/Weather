import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor() { }

  setItem(key: string, value: any) {
    console.log("hi:", key, value)
    return new Promise((resolve, reject) => {
      localStorage.setItem(key, JSON.stringify(value));
      resolve('success');
    });
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }
}

//Injectable:
//The @Injectable() decorator defines a class as a service in Angular
// and allows Angular to inject it into a component as a dependency.
