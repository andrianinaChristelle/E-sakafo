import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-ajout-resto',
  templateUrl: './ajout-resto.component.html',
  styleUrls: ['./ajout-resto.component.css']
})
export class AjoutRestoComponent implements OnInit {

  constructor(private route : Router , private resto : RestaurantService) { }
  token : any='';
  restau = {email:'' , nom :'' , contact : '' , localisation :'' , password:''};
  message : any ='';
  ngOnInit(): void {
    
  }
  onInsert(form : NgForm){
    var input ={
      email : this.restau.email ,
      password : this.restau.password , 
      nom : this.restau.nom ,
      contact : this.restau.contact , 
      localisation : this.restau.localisation ,
      role : '624d4ad88dc84c21fb3afd7c'
    }

    console.log(input);
    console.log("okkk");
    const onSuccess = ()=>{  
        this.route.navigate(['Liste-Resto']);     
    }
    const onError = (data : any)=>{
      const type=typeof data ;
      this.message = 'erreur'
      this.route.navigate(['Liste-Resto']);  
    }
    try{
      this.resto.addRestaurant(input).subscribe(onSuccess,onError);
    }
    catch(err){
      this.message =err;
        console.log(err);
    }
  }

}
