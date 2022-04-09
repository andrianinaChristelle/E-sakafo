import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { NgForm ,FormControl, Validators} from '@angular/forms';

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
      const type=typeof data['data'] ;
      // console.log("type"+data);
      // if(type=='string'){
      //   this.message=data;
      //   console.log(data);
      // }
      // else{
        this.token = data['data']['token'];
        sessionStorage.setItem("token",data['data']['token']);
        this.route.navigate(['Liste-Resto']);
        // console.log(this.token);
     
    }
    const onError = (data : any)=>{
      // const type=typeof data ;
      this.message ="erreur";
      console.log("okkkk");
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

