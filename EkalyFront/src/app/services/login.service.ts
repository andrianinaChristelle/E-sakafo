import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment.prod';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient ,  private toolsServ : ToolsService) { }
  getAll(){
    console.log(base_url+"/getPlat");

    return this.http.get(base_url+"/getPlat");
  }
  Login(input : any){

    let data = this.http.post(base_url+'authentification',input);
    console.log(data);
    return data;
  }
  getUser(id :any){
    const options = this.toolsServ.formOption(); // headers
    options.headers.Authorization='Bearer ' +sessionStorage.getItem('token');
  let data = this.http.get(base_url+'getByIdUser/'+id,options);
  console.log(data);
  return data;
  }
  getToken(){
    const options = this.toolsServ.formOption(); // headers
    options.headers.Authorization='Bearer ' +sessionStorage.getItem('token');
    let data = this.http.get(base_url+'getToken',options);
    console.log(data);
    return data;
  }
}
