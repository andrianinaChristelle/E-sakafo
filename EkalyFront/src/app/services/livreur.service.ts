import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';
import { base_url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  constructor(private http : HttpClient, private toolsServ : ToolsService) { }
  getAllLivreur(){
    console.log('hgjhgj');
    const options = this.toolsServ.formOption();
    options.headers.Authorization='Bearer ' +sessionStorage.getItem('token');
    return this.http.get(base_url+"getByRole/624d4aa38dc84c21fb3afd78",options);
  }

  addLivreur(input : any){
    const options = this.toolsServ.formOption(); // headers
    options.headers.Authorization='Bearer ' +sessionStorage.getItem('token');
    let data = this.http.post(base_url+'addLivreur',input,options);
    console.log(data);
    return data;
  }
  search(key : any){
    console.log("keiii"+key);
    // const options = this.toolsServ.formOption(); // headers
    // options.headers.Authorization='Bearer ' +sessionStorage.getItem('token');
    let data = this.http.get(base_url+'searchLivreur/'+key);
    console.log(data);
    return data;
  }
}
