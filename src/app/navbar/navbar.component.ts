import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  darkmod:boolean = true;
  theme(){
    console.log('theme change intialized')

    if(this.darkmod){
      document.documentElement.style.setProperty('--color-pink', 'wheat');
      this.darkmod = false
      
    }else{
      document.documentElement.style.setProperty('--color-pink', 'rgb(240, 95, 95)');
      this.darkmod = true
    }

    

  }



}

