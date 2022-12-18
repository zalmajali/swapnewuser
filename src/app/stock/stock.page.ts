import { Component, OnInit, ViewChild , TemplateRef, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {IonSlides } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import SignaturePad from 'signature_pad';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild('canvas') canvasEl: ElementRef;
  signaturePad: SignaturePad;
  signatureImg: string;
  title = 'signatureJS';
  name: string;
  segment = 0;
  constructor(protected readonly modaleController: ModalController) { }
  async segmentChanged(ev: any) {
    await this.slider.slideTo(this.segment);
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  ngOnInit() {
  }
  dismiss() {
    this.modaleController.dismiss();
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    console.log(event);
    // works in device not in browser

  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }
}
