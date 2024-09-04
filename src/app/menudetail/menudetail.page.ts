import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menudetail',
  templateUrl: './menudetail.page.html',
  styleUrls: ['./menudetail.page.scss'],
})
export class MenudetailPage implements OnInit {
  quantity: number = 1;
  unitPrice: number = 45;
  totalPrice: number | undefined;

  constructor(private menu: NavController) {
    this.calculateTotalPrice();
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
    this.menu.navigateForward('/queue');
  }

  items=[
    {
      id: 1,
      name:'นูเทล่า ฝอยทอง โกโก้ครั้น เยลลี่',
      price: 45,
      ImageURL:'../../assets/pic/product/1.jpg'
    },
    {
      id: 2,
      name:'เครปกรอบวิปครีม สตอสด',
      price: 69,
      ImageURL:'../../assets/pic/product/2.jpg'
    },
    {
      id: 3,
      name:'ไข่ไก่ ลูกเกด เม็ดสี เยลลี่',
      price: 45,
      ImageURL:'../../assets/pic/product/3.jpg'
    },
    {
      id: 4,
      name:'เครปกรอบวิปครีม โอริโอ้ ไมโล',
      price: 59,
      ImageURL:'../../assets/pic/product/4.jpg'
    },
  ];

}
