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
  unitPrice: number = 45;
  totalPrice: number | undefined;
  item : any;

  constructor(private detail: NavController,private route: Router) {
    this.calculateTotalPrice();
    const navigation = this.route.getCurrentNavigation();
    this.item = navigation?.extras?.state?.['i'];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  increaseQuantity() {
    this.quantity++;
    this.calculateTotalPrice();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculateTotalPrice();
    }
  }

  calculateTotalPrice() {
    this.totalPrice = this.unitPrice * this.quantity;
  }

  goToqueue() {
    this.detail.navigateForward('/queue');
  }
}
