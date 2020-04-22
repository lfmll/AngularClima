import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject, Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {Coords} from '../../structures/coords.structure';
@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {
  public weatherSubject: Subject<any>=new Subject<any>();
  public weather$:Observable<any>=this.weatherSubject.asObservable();

  endpoint:string='https://api.openweathermap.org/data/2.5/weather';
  constructor(private http:HttpClient) {
    this.get({
      lat:35,
      lon:139
    });
  }
  get(coords:Coords){
    let args:string=`?lat=${coords.lat}&lon=${coords.lon}&APPID=${environment.key}&units=metric`;
    let Observable=this.http.get(this.endpoint+args).subscribe(this.weatherSubject);
    //this.http.get('assets/weather.json').subscribe(console.log);
  }
  //Subject
  //Observable
}
