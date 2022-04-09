import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private route : Router , private login :LoginService ) { }
  title = 'EkalyFront';
  session : any ='';
  liste : any ='';
  nom : any ='';
  idRole : any ='';
  ngOnInit(): void {
    this.session =sessionStorage.getItem('token');
      const onSuccess = (data:any)  =>{
        console.log(data['data']);
        this.idRole=data['user']['role'];
        this.nom=data['user']['nom'];
        sessionStorage.setItem("id",data['user']['_id']);
        }
        const  onError =(data : any)=>{
          this.route.navigate(['login']);
        }
        try{
          console.log("ok");
          this.login.getToken().subscribe(onSuccess, onError);
  
        }
        catch(err){
          console.log("erreur");
          console.log(err);
        }
    
    
  }
  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    this.route.navigate(['login']);
  }
}
