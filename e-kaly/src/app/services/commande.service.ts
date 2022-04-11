import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';
import { base_url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http :HttpClient) { }
  addCommande(input : any){
    let data = this.http.post(base_url+'addClient',input);
    console.log(data);
    return data;
  }
}
