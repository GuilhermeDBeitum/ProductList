import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-alert-delete',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertDeleteComponent {
  options: any = [{ name: 'teste', quantity: 1 }];
  name: string;
  quantity: number;

  constructor(private alertController: AlertController, private data: ProductService) { }

  async presentAlertDelete(id: number) {
    const alert = await this.alertController.create({
      header: 'Excluir produto',
      message: 'Tem certeza que deseja excluir o produto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

    if (role === 'confirm') {
      this.deleteProduct(id);
    }
  }

  deleteProduct(id: number) {
    this.data.deleteProduct(id);
  }
}
