import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyLogsService {

  constructor(private http: HttpClient) { }

  FinalFood = () => {
    const url = 'http://localhost:3000/posts';
    return this.http.get(url).pipe(map(x => x));
  };
}
