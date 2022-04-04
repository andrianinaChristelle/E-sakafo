import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {

  constructor(private plat : LoginService) { }
  Plat : any []=[];
  message : any ='';
  ngOnInit(): void {
      const onSuccess = (data:any)=>{
        // if(data['status']==201){
          console.log('tesst');
          console.log(data.status);
         if(){
           
         }
        // }
        // else{
        //   this.message ="some error";
        //   console.log('okkk');
        // }
      }
      const  onError =(data : any)=>{}
      try{
        this.plat.getAll().subscribe(onSuccess, onError);
      }
      catch(err){
        console.log("erreur");
        this.message =err;
        
        console.log(err);
      }
  }


}
