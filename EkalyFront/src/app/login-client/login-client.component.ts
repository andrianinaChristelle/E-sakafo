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
    // var input: any = new FormData();
    var input ={
      email : this.users.email ,
      password : this.users.password
    }
    // input.set("email" , "test");
    // input.set("password","test");
    // console.log(this.users.email);

    console.log(input);
    console.log("okkk");
    const onSuccess = (data:any)=>{
      const type=typeof data ;
      if(type=='string'){
        this.message=data;
        console.log(data);
      }
      else{
        this.token = data['token'];
        sessionStorage.setItem("token",data['token']);
        console.log(this.token);
      }
    }
    const onError = (data : any)=>{}
    try{
      this.user.Login(input).subscribe(onSuccess,onError);
    }
    catch(err){
      this.message =err;
        console.log(err);
    }
    
  }
   
  }

