import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';
const BACKEND_URL = environment.apiUrl + '/yelp'; // /api/yelp

@Injectable({
  providedIn: 'root'
})
export class FastfoodsearchService {

  constructor(
    private http: HttpClient
  ) {
    this.getLocation();
  }


  getLocation(): void {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        
        this.callAPI(longitude, latitude)
      })
    } else {
      console.log("LOCATION SERVICE NOT ALLOWED");
      console.log("TODO prompt for user to enter ZIP code")
      console.log("Look up maybe a master zip code list??")
      // https://simplemaps.com/data/us-zips
    }
  }


  callAPI(longitude: number, latitude: number) {
    // TODO Call YELP Fusion API

    // var yelpFusion = "https://api.yelp.com/v3/businesses/search/"

    console.log("Current Longitude: ", longitude);
    console.log("Current Latitude", latitude);

    // queryString = BACKEND_URL + "/"

    let params = new HttpParams().set("latitude", latitude).set("longitude", longitude);
    var yelpFusion = "/yelp/latitude="+latitude+"&longitude="+longitude


    this.http.get(BACKEND_URL + "/location", { params: params})
      .subscribe(res => {
        console.log("Results from fusion lookup");
        console.log(res);
      })


  }

}
