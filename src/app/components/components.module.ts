import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ProductComponent } from './products/product/product.component';
import { ToastComponent } from '../components/toast/toast.component';
import { PopoverComponent } from '../components/popover/popover.component';
import { AlertDeleteComponent } from './alertDelete/alert.component';
import { AlertEditComponent } from './alertEdit/alert.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ProductComponent, ToastComponent, PopoverComponent, AlertDeleteComponent, AlertEditComponent],
  exports: [ProductComponent, ToastComponent, PopoverComponent, AlertDeleteComponent, AlertEditComponent],
})
export class ComponentsModule { }
