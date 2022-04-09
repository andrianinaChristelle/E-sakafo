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
  Login(){
    var input ={
      email : this.users.email ,
      password : this.users.password
    }

    console.log(input);
    console.log("okkk");
    const onSuccess = (data:any)=>{
      const type=typeof data['data'] ;
 
        this.token = data['data']['token'];
        sessionStorage.setItem("token",data['data']['token']);
        // this.route.navigate(['Liste-Resto']);
        console.log(this.token);
     
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
   redirection=()=>{
     var idRole ='';
    // var session =sessionStorage.getItem('token');
    const onSuccess = (data:any)  =>{
        console.log(data['data']);
        idRole=data['user']['role'];
        console.log(idRole)
        if(idRole=='624d4a978dc84c21fb3afd76'){
          this.route.navigate(['Liste-Resto']);
        }
        else if (idRole=='624d4ad88dc84c21fb3afd7c'){
          this.route.navigate(['liste-Plat']);
          console.log('resto')
        }
    }
    const  onError =(data : any)=>{
        this.route.navigate(['login']);
      }
      try{
        this.Login();
        console.log("ok");
        this.user.getToken().subscribe(onSuccess, onError);

      }
      catch(err){
        console.log("erreur");
        console.log(err);
      }
  }
   
  }

