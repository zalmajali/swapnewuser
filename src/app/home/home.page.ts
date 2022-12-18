import { Component ,ViewChild } from '@angular/core';
import { IonReorderGroup,MenuController } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
declare var google:any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  map: any;
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  doReorder(ev: any) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }
  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
  constructor(private menu:MenuController) {}
  ionViewDidEnter() {
    this.map = new google.maps.Map(document.getElementById("map") , {
      center:{lat: -34.397 , lng: 150.644},
      zoom:8,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
    });
  }
  async functionOpenMenue(){
    this.menu.enable(true,"outMenue");
    this.menu.open("outMenue");
  }
}

