import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {

  constructor(private user : LoginService, private route : Router ) { }
  token : any='';
  users = {email:'' , password :''};
  message : any ='';
  ngOnInit(): void {
  }
  Login(form : NgForm){
    var input ={
      email : this.users.email ,
      password : this.users.password
    }

    console.log(input);
    console.log("okkk");
    const onSuccess = (data:any)=>{
      const type=typeof data['donnee'] ;
      console.log("type"+data);
      if(type=='string'){
        this.message=data;
        console.log(data);
      }
      else{
        this.token = data['donnee']['token'];
        sessionStorage.setItem("token",data['token']);
        console.log(this.token);
      }
    }
    const onError = (data : any)=>{
      const type=typeof data ;
      console.log(typeof data );
    }
    try{
      this.user.Login(input).subscribe(onSuccess,onError);
    }
    catch(err){
      this.message =err;
        console.log(err);
    }
    
  }
   
  }

