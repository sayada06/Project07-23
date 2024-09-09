import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.page.html',
  styleUrls: ['./menudetail.page.scss'],
})
export class MenudetailPage implements OnInit {
  quantity: number = 1;
  totalPrice: number | undefined;
  item : any;

  constructor(private detail: NavController,private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    this.item = navigation?.extras?.state?.['i'];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }


  goToqueue() {
    this.detail.navigateForward('/queue');
  }

}
