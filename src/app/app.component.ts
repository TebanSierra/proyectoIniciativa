import { Component, ViewChild, NgModule } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { BrowserModule } from "@angular/platform-browser";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { CapacityPage } from '../pages/capacity/capacity';
import { InfoBusPage } from '../pages/infoBus/infoBus';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Mapa', component: MapPage },
        { title: 'Info Bus', component: InfoBusPage }
      ];
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

