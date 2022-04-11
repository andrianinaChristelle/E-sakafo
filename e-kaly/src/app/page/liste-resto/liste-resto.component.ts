import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-resto',
  templateUrl: './liste-resto.component.html',
  styleUrls: ['./liste-resto.component.css']
})
export class ListeRestoComponent implements OnInit {

  constructor(private restaurant : RestaurantService , private route : Router) { }

  message : any ='';
  liste : any [] =[];
  
  ngOnInit(): void {
    
      const onSuccess = (data:any)  =>{
            console.log(data['data']);
            this.liste=data['data'];
      }
      const  onError =(data : any)=>{
      }
      try{
        console.log("ok");
        this.restaurant.getAllRestaurant ().subscribe(onSuccess, onError);
      
      }
      catch(err){
        console.log("erreur");
        this.message =err;
        
        console.log(err);
      }
      // this.restaurant.getAllRestaurant();
  }
  redirect() {
    this.route.navigate(['add-Resto']);
  }
  onKeypressEvent(event: any){
    console.log(event.target.value);
    var key =event.target.value;
    const onSuccess = (data:any)  =>{
      console.log(data['data']);
      this.liste=data['data'];
    }
    const  onError =(data : any)=>{
      // this.route.navigate(['login']);
    }
    try{
      console.log("ok");
      this.restaurant.searchResto(key).subscribe(onSuccess, onError);

    }
    catch(err){
      console.log("erreur");
      this.message =err;
      
      console.log(err);
    }
  }
}
