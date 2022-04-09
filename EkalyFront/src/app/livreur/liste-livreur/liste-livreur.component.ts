import { Component, OnInit } from '@angular/core';
import { LivreurService } from 'src/app/services/livreur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-livreur',
  templateUrl: './liste-livreur.component.html',
  styleUrls: ['./liste-livreur.component.css']
})
export class ListeLivreurComponent implements OnInit {

  constructor(private livreur : LivreurService , private route : Router) { }

  message : any ='';
  liste : any [] =[];
  
  ngOnInit(): void {
    
      const onSuccess = (data:any)  =>{
            console.log(data['data']);
            this.liste=data['data'];
      }
      const  onError =(data : any)=>{
        this.route.navigate(['login']);
      }
      try{
        console.log("ok");
        this.livreur.getAllLivreur().subscribe(onSuccess, onError);
      
      }
      catch(err){
        console.log("erreur");
        this.message =err;
        
        console.log(err);
      }
      // this.restaurant.getAllRestaurant();
  }
  redirect() {
    this.route.navigate(['ajout-livreur']);
}

}
