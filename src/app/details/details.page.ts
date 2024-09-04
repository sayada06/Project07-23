import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goToqueueback() {
    this.navCtrl.navigateForward('/queueback');
  }
  
  ngOnInit() {
  }

}
