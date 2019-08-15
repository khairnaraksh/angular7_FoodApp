import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getFoodData = () => {
    const url = './../assets/Food.json';
    return this.http.get(url).pipe(map(x => x));
  };
  // getSidebar = () => {
  //   const url = `./../../../../assets/data/navigations.json`;
  //   return this.http.get(url).pipe(map(x => x));
  // }

}
