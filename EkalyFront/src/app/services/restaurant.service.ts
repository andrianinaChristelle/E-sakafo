import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';
import { base_url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http : HttpClient, private toolsServ : ToolsService) { }
  getAllRestaurant(){
    console.log('hgjhgj');
    const options = this.toolsServ.formOption();
    options.headers.Authorization='Bearer ' +sessionStorage.getItem('token');
    return this.http.get(base_url+"/getByRole/624d4ad88dc84c21fb3afd7c",options);
  }

  addRestaurant(input : any){
    const options = this.toolsServ.formOption(); // headers
    options.headers.Authorization='Bearer ' +sessionStorage.getItem('token');
    let data = this.http.post(base_url+'addRestaurant',input,options);
    console.log(data);
    return data;
  }
}
