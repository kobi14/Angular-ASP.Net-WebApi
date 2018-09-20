import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Welcome } from "../Models/welcome.models";
import { Response } from "@angular/http";
import { Observable } from 'rxjs';

// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import { map } from 'rxjs/operators';
import { filter, map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  selectWel :Welcome
  welList:Welcome[]

  constructor(public http: Http) { }

  getAllWelcomes() {
    return this.http.get('http://localhost:52074/Welcome/GetAllWelcomes')
    .pipe(map(Response=>Response.json()));
    // .pipe(map((data : Response) =>{
    //   return data.json() as Welcome[];
    // })).toPromise().then(x => {
    //   this.welList = x;
    // })
  
  }

  saveWelcome(welcome: Welcome) {
    return this.http.post('http://localhost:1283/Welcome/SaveWelcome', welcome);
  }

}
