import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: 'toast.component.html',
})
export class ToastComponent {
  constructor(private toastController: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position
    });

    await toast.present();
  }
}
