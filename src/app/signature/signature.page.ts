import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.page.html',
  styleUrls: ['./signature.page.scss'],
})
export class SignaturePage implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  @ViewChild('canvas') canvasEl: ElementRef;
  signaturePad: SignaturePad;
  signatureImg: string;
  title = 'signatureJS';
  name: string;

  constructor() { }

  ngOnInit() {
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

  signatureSelect(_event) {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const signatureCanvas = <HTMLFormElement>document.getElementById('signatureCanvas');
    // eslint-disable-next-line eqeqeq
    if (_event.detail.value == 'complete') {
      signatureCanvas.style.display='block';
    }else {
      signatureCanvas.style.display='none';
    }
  }
}
