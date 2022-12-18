import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
  }
  async functionOpenMenue(){
    this.menu.enable(true,"outMenue");
    this.menu.open("outMenue");
  }
}
