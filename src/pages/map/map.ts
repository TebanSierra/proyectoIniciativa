import {Component, ElementRef, ViewChild} from '@angular/core';
import {Platform, NavController, AlertController} from "ionic-angular";
import {GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent, GoogleMapOptions, MarkerOptions, Marker} from "@ionic-native/google-maps";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map')
  private mapElement:ElementRef;
  private map:GoogleMap;
  private location:LatLng;
  private data = {};

  constructor(private platform:Platform, public alertCtrl:AlertController, public navController: NavController) {
    this.location = new LatLng(6.180353, -75.572548);
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 6.180353,
           lng: -75.572548
         },
         zoom: 18,
         tilt: 30
      }
    }
    this.map = GoogleMaps.create('map', mapOptions);
  }

  submitForm() {
    if(this.data['origen'] =='') {
      this.showAlert("Error", "Ingrese el punto de origen");
    } else if(this.data['destino'] == '') {
      this.showAlert("Error", "Ingrese el punto de destino");
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
  
  /*addMarker() {
    this.map.addMarker({
      title: 'My Marker',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: this.location.lat,
        lng: this.location.lng
      }
    })
    .then(marker => {
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('Marker Clicked');
      });
    });
  }*/
}