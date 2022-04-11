import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private route : Router , private client : LoginService) { }
  token : any='';
  clients = {email:'' , nom :'' , contact : '' , prenom :'' , password:'' , localisation:''};
  message : any ='';
  ngOnInit(): void {
    
  }
  envoieMail(email:any){
    var input ={
      to : email ,
      subject : "numero client 001"
    }

    console.log(input);
    console.log("okkk");
    const onSuccess = ()=>{  
   
        console.log("email envoyer");
    }
    const onError = (data : any)=>{
      this.message = 'erreur'
    }
    try{
      this.client.envoyeMail(input).subscribe(onSuccess,onError);
    }
    catch(err){
      this.message =err;
        console.log(err);
    }
  }
  onInsert(form : NgForm){
    var input ={
      email : this.clients.email ,
      password : this.clients.password , 
      nom : this.clients.nom ,
      contact : this.clients.contact , 
      prenom : this.clients.prenom ,
      localisation : this.clients.localisation,
      role : '624d4ad18dc84c21fb3afd7a'
    }
    this.envoieMail(this.clients.email);
    console.log(input);
    console.log("okkk");
    const onSuccess = ()=>{  
        // this.route.navigate(['login']);     
        console.log("data enter");
    }
    const onError = (data : any)=>{
      // const type=typeof data ;
      this.message = 'erreur'
      // this.route.navigate(['Liste-client']);  
    }
    try{
      this.client.inscription(input).subscribe(onSuccess,onError);
    }
    catch(err){
      this.message =err;
        console.log(err);
    }
  }
}
