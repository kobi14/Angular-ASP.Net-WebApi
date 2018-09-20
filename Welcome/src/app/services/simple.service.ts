import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';

import { filter, map, catchError } from 'rxjs/operators';


import {  Welcome} from '../Models/welcome.models';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  selectedEmployee : Welcome;
  welcomeList : Welcome[];

  

  constructor(private http : Http) { }


  postWelcome(wel : Welcome){
    var body = JSON.stringify(wel);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:52074/api/simples/',body,requestOptions).pipe(map(x => x.json()));
  }


  getWelcomeList(){
    return this.http.get('http://localhost:52074/api/simples/')
    .pipe(map((Response =>Response.json()
    )));
    
  }
  putWelcome(id, wel) {
    var body = JSON.stringify(wel);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:52074/api/simples/' + id,body,requestOptions).pipe(map(res => res.json()));
  }


  deleteWelcome(id: number) {
    return this.http.delete('http://localhost:52074/api/simples/' + id).pipe(map(res => res.json()));
  }
}
