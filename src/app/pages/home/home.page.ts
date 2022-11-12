import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from 'src/app/interfaces/product';
import { ToastComponent } from '../../components/toast/toast.component';
import { PopoverComponent } from '../../components/popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  @ViewChild(ToastComponent, { static: false })
  toast: ToastComponent;

  @ViewChild(PopoverComponent, { static: false })
  popover: PopoverComponent;

  constructor(private data: ProductService) { }

  getProducts(): Product[] {
    return this.data.getProducts();
  }
  addProduct(product: string, qtd: number, id: number) {
    if (product) {
      qtd = qtd || 0;
      this.data.addProduct(product, qtd, id);
      this.presentToast();
    }
  }

  presentToast() {
    this.toast.presentToast('bottom', 'Produto adicionado');
  }


  presentPopover(e: Event) {
    if (this.popover) {
      this.popover.presentPopover(e);
    }
  }

  ngAfterViewInit() { }
  ngOnInit() { }

}
