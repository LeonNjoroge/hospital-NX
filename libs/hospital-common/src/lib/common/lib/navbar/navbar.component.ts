import { Component } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports:[NgClass, CommonModule]
})
export class NavbarComponent {

  activeTab: number | null= null;
  
  navItems= [
    { name: 'HOME', route: '/home', activeImg: 'assets/icons/home.svg', inactiveImg: 'assets/icons/home-bl.svg' },
    { name: 'PATIENTS', route: '/patient', activeImg: '../assets/icons/categories.svg', inactiveImg: 'assets/icons/categories-bl.svg' },
    { name: 'DOCTORS', route: '/doctors', activeImg: '../assets/icons/cart.svg', inactiveImg: 'assets/icons/cart-bl.svg' },
    { name: 'SETTINGS', route: '/home', activeImg: 'assets/icons/payments.svg', inactiveImg: 'assets/icons/payments-bl.svg' },
    { name: 'CONTACT', route: '/home', activeImg: 'assets/icons/more.svg', inactiveImg: 'assets/icons/more-bl.svg' }
  ];

 

  constructor(private router: Router) { }

  setActive(index:number){
    this.activeTab = index;
    this.router.navigate([this.navItems[index].route])
  }

  

}
