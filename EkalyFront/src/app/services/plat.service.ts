import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';
import { base_url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http : HttpClient, private toolsServ : ToolsService) { }
  getPlat(idResto : any){
    // console.log('hgjhgj');
    // const options = this.toolsServ.formOption();
    // options.headers.Authorization='Bearer ' +sessionStorage.getItem('token');
    return this.http.get(base_url+"getByRestaurant/"+idResto);
    }
  addPlat(input : any){
    const options = this.toolsServ.formOption(); // headers
    options.headers.Authorization='Bearer ' +sessionStorage.getItem('token');
    let data = this.http.post(base_url+'addPlat',input,options);
    console.log(data);
    return data;
  }
}
