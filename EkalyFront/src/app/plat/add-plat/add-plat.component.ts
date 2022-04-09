import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {

  constructor(private route : Router , private Plat : PlatService) { }
  token : any='';
  plats = {plat:'' , prixAchat :'' , prixVente : '' };
  message : any ='';
  ngOnInit(): void {
    
  }
  onInsert(){
    var input ={
      plat : this.plats.plat ,
      prixAchat : this.plats.prixAchat ,
      prixVente : this.plats.prixVente ,
      restaurant : sessionStorage.getItem('id'),
    }

    console.log(input);
    console.log("okkk");
    const onSuccess = ()=>{  
        this.route.navigate(['liste-Plat']);     
        console.log("data enter");
    }
    const onError = (data : any)=>{
      // const type=typeof data ;
      this.message = 'erreur'
      // this.route.navigate(['Liste-livreur']);  
    }
    try{
      this.Plat.addPlat(input).subscribe(onSuccess,onError);
    }
    catch(err){
      this.message =err;
        console.log(err);
    }
  }

}
