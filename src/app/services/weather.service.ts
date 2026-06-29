import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environment/environment";
import { Observable } from "rxjs";
import { WeatherData } from "../models/weather.model";

@Injectable({
  providedIn: 'root'
})
export class WeatherService{
  constructor(private http: HttpClient){
    
  }

  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
      .set(environment.apiKeyName, environment.apiKeyValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('days', '7')
    })
  }
}