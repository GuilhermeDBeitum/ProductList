import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ToastComponent } from '../../toast/toast.component';
import { AlertDeleteComponent } from '../../alertDelete/alert.component';
import { AlertEditComponent } from '../../alertEdit/alert.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, AfterViewInit {
  @Input() product: Product;

  @ViewChild(ToastComponent, { static: false }) toast: ToastComponent;

  @ViewChild(AlertEditComponent, { static: false }) alertEdit: AlertEditComponent;

  @ViewChild(AlertDeleteComponent, { static: false }) alertDelete: AlertDeleteComponent;

  constructor() { }
  presentAlertEdit() {
    this.alertEdit.presentAlertEdit(this.product.id, this.product.name, this.product.quantity);
  }

  presentAlertDelete(id: number) {
    console.log(id);
    this.alertDelete.presentAlertDelete(id);
  }

  presentToast() {
    this.toast.presentToast('bottom', 'Produto deletado');
  }

  presentToast2() {
    this.toast.presentToast('bottom', 'Produto editado');
  }


  ngOnInit() { }

  ngAfterViewInit() { }

}
