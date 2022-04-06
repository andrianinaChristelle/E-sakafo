import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-liste-resto-client',
  templateUrl: './liste-resto-client.component.html',
  styleUrls: ['./liste-resto-client.component.css']
})
export class ListeRestoClientComponent implements OnInit {

  constructor(private restaurant : RestaurantService) { }

  message : any ='';
  liste : any [] =[];
  ngOnInit(): void {
      const onSuccess = (data:any)  =>{
        
          // if(data['status']==200){
          //   console.log("jhhjj");
            console.log(data['data']);
            this.liste=data['data'];
    
          // }
          // else{
          //   this.message ="some error";
          
          // }
      }
      const  onError =(data : any)=>{}
      try{
        console.log("ok");
        this.restaurant.getAllRestaurant().subscribe(onSuccess, onError);
      
      }
      catch(err){
        console.log("erreur");
        this.message =err;
        
        console.log(err);
      }
      // this.restaurant.getAllRestaurant();
  }
}
