import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }
  getAll(){
    console.log(base_url+"/getPlat");

    return this.http.get(base_url+"/getPlat");
  }
  Login(input : any){
    let data = this.http.post(base_url+'authentification',input)
    console.log(data);
    return data;
  }
}
