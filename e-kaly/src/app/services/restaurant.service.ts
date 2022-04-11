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
    return this.http.get(base_url+"getResto");
  }
  getPlat(idResto : any){
    console.log(base_url+"getByRestaurant/"+idResto);
    return this.http.get(base_url+"getByRestaurant/"+idResto);
  }
  searchResto(key:any){
    console.log(base_url+"searchResto/"+key);
    return this.http.get(base_url+"searchResto/"+key);
  }
  searchPlat(key:any , idResto:any){
    console.log(base_url+"searchResto/"+key);
    return this.http.get(base_url+"searchPlat/"+key+"/"+idResto);
  }
}
