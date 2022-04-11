import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  constructor(private route : ActivatedRoute , private restaurant : RestaurantService) { }
  message : any ='';
  liste : any [] =[];
  idResto : any =this.route.snapshot.queryParamMap.get('idResto');
  ngOnInit(): void {
    console.log("resto---------"+this.idResto);
      const onSuccess = (data:any)  =>{
            console.log(data['data']);
            this.liste=data['data'];
      }
      const  onError =(data : any)=>{
      }
      try{
        console.log("ok");
        this.restaurant.getPlat(this.idResto).subscribe(onSuccess, onError);
      
      }
      catch(err){
        console.log("erreur");
        this.message =err;
        
        console.log(err);
      }
      // this.restaurant.getAllRestaurant();
  }
  onKeypressEvent(event: any){
    // this.idResto=this.route.snapshot.queryParamMap.get('idResto');
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
      this.restaurant.searchPlat(key,this.idResto).subscribe(onSuccess, onError);

    }
    catch(err){
      console.log("erreur");
      this.message =err;
      
      console.log(err);
    }
  }

//   redirect() {
//     this.route.navigate(['add-Resto']);
// }

}
