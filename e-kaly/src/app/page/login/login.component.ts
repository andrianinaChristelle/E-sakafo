import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
        console.log("vous etes connecte");
        // this.route.navigate(['Liste-Resto']);
        // // this.route.navigate(['Liste-Resto']);
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
        sessionStorage.setItem("nom",data['user']['nom']);
        sessionStorage.setItem("id",data['user']['_id']);
        console.log(idRole);
        this.route.navigate(['']);
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
