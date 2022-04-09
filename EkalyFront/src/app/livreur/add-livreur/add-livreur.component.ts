import { Component, OnInit } from '@angular/core';
import { LivreurService } from 'src/app/services/livreur.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-livreur',
  templateUrl: './add-livreur.component.html',
  styleUrls: ['./add-livreur.component.css']
})
export class AddLivreurComponent implements OnInit {

  constructor(private route : Router , private livreur : LivreurService) { }
  token : any='';
  livreurs = {email:'' , nom :'' , contact : '' , prenom :'' , password:''};
  message : any ='';
  ngOnInit(): void {
    
  }
  onInsert(form : NgForm){
    var input ={
      email : this.livreurs.email ,
      password : this.livreurs.password , 
      nom : this.livreurs.nom ,
      contact : this.livreurs.contact , 
      prenom : this.livreurs.prenom ,
      role : '624d4aa38dc84c21fb3afd78'
    }

    console.log(input);
    console.log("okkk");
    const onSuccess = ()=>{  
        this.route.navigate(['liste-livreur']);     
        console.log("data enter");
    }
    const onError = (data : any)=>{
      // const type=typeof data ;
      this.message = 'erreur'
      // this.route.navigate(['Liste-livreur']);  
    }
    try{
      this.livreur.addLivreur(input).subscribe(onSuccess,onError);
    }
    catch(err){
      this.message =err;
        console.log(err);
    }
  }

}
