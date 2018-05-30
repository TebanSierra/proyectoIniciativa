import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { MapPage } from '../map/map';
import { InfoBusPage } from "../infoBus/infoBus";
import { CapacityPage } from "../capacity/capacity";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabs: any;

  constructor(public navCtrl: NavController) {
  }

  /**
   * goMap
   */
  public goMapa() {
    this.navCtrl.push(MapPage);
  }

  /**
   * goMap
   */
  public goBus() {
    this.navCtrl.push(InfoBusPage);
  }
}
