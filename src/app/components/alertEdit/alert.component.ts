import { Component } from '@angular/core';
import { AlertController, AlertInput } from '@ionic/angular';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-alert-edit',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertEditComponent {
  options: any = [];
  id: number;
  name: string;
  quantity: number;

  constructor(private alertController: AlertController, private data: ProductService) { }

  async presentAlertEdit(id: number, name: string, quantity: number) {
    const alert = await this.alertController.create({
      header: 'Editar produto',
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
      inputs: [
        {
          label: 'Produto',
          placeholder: 'Produto',
          value: name,
        },
        {
          label: 'Quantidade',
          placeholder: 'Quantidade',
          type: 'number',
          min: 0,
          value: quantity,
        },
      ],
    });

    await alert.present();

    const { ...inputs } = await alert.onWillDismiss();

    if (inputs.role === 'confirm') {
      this.editProduct(id, inputs.data.values);
    }
  }

  editProduct(id: number, data: any) {
    this.data.editProduct(id, data);
  }
}
