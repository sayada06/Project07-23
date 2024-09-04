import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-queueback',
  templateUrl: './queueback.page.html',
  styleUrls: ['./queueback.page.scss'],
})
export class QueuebackPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goTodetails() {
    this.navCtrl.navigateForward('/details');
}

  ngOnInit() {
  }

}
