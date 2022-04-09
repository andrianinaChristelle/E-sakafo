import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-liste-plat',
  templateUrl: './liste-plat.component.html',
  styleUrls: ['./liste-plat.component.css']
})
export class ListePlatComponent implements OnInit {
  constructor(private plat : PlatService , private route : Router , private login : LoginService) { }
  message : any ='';
  liste : any [] =[];
  idResto : any ='';

  ngOnInit(): void {
    this.idResto = sessionStorage.getItem('id');
      const onSuccess = (data:any)  =>{
            console.log(data['data']);
            this.liste=data['data'];
      }
      const  onError =(data : any)=>{
        this.route.navigate(['login']);
      }
      try{
        console.log("ok");
        this.plat.getPlat(this.idResto).subscribe(onSuccess, onError);
      
      }
      catch(err){
        console.log("erreur");
        this.message =err;
        
        console.log(err);
      }
      // this.restaurant.getAllRestaurant();
  }
  redirect() {
    this.route.navigate(['ajout-Plat']);
  }

}
