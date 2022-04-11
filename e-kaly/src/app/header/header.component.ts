import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route : Router) { }
  nom : any = '';
  token : any ='';
  ngOnInit(): void {
    this.nom = sessionStorage.getItem('nom');
    console.log(this.nom)
    this.token = sessionStorage.getItem('token');
  }
  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('nom');
    this.route.navigate(['']);
  }
}
