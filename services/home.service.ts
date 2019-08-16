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
  saveFood=(food)=>{
    let data = {
      calories: food.calories,
      foodcategory: food.category,
      food: food.foodType
    }
    let body = data
    const url = 'http://localhost:3000/posts';
    return this.http.post(url,body).pipe(map(x => x));
  }

}
