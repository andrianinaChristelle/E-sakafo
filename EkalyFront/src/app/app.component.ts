import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private route : Router ) { }
  title = 'EkalyFront';
  session : any ='';
  ngOnInit(): void {
    this.session =sessionStorage.getItem('token');
  }
  logOut() {
    sessionStorage.removeItem('token');
    this.route.navigate(['login']);
  }
}
