/* eslint-disable eqeqeq */
import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';



@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})

export class TaskPage implements OnInit {



  constructor() {

   }

  ngOnInit() {

  }





  selectAll(_event) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const signatureBtn = <HTMLFormElement>document.getElementById('completeSignature');
    // eslint-disable-next-line eqeqeq
    if (_event.detail.value == 'complete') {
      signatureBtn.style.display='block';
    }else {
      signatureBtn.style.display='none';
    }
  }


  /* Popup Model */





}


