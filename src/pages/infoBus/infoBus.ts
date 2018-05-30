import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the EtaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infoBus',
  templateUrl: 'infoBus.html',
})
export class InfoBusPage {

  private ruta: string = "";
  buses: any[] = [];
  private selectedBus: any;
  private busFound:boolean = false;

  private answer = [];
  private visibleAns;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataServiceProvider, public alertCtrl:AlertController) {
    this.dataService.getBuses()
      .subscribe((response)=> {
        this.buses = response;
        console.log(this.buses);
      });
  }

  submitForm() {
    if(this.ruta == '') {
      this.showAlert("Error", "Debe indicar el NUMERO de la ruta.");
    } else {
      this.search();
    }
  }
  search() {
    this.selectedBus = {};
    this.selectedBus = this.buses.find(bus => bus.ruta === this.ruta);
    if(this.selectedBus != undefined) {
      this.busFound = true;
    } else {
      this.selectedBus = {};
      this.busFound = false;
      this.showAlert("Error", "Ruta no encontrada");
    }
  }

  showAlert(error, subtitle) {
    let alert = this.alertCtrl.create({
      title: error,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EtaPage');
  }

}
