import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
menudetail(_t28: { name: string; price: number; ImageURL: string; }) {
throw new Error('Method not implemented.');
}

  constructor(private detail: NavController) {}

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

  gotomenudetail(){
    this.detail.navigateForward('/menudetail')
  }

}
