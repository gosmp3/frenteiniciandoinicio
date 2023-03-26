import { Component, Input } from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService],
})
export class ProductComponent {
  @Input() product!: Product;
  products = [...products];
  display: boolean = false;
  productos = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  addToCart(product: Product) {
    let producto = this.productos.find((p) => p.id === product.id);

    if (!producto) {
      console.log('Agregando producto ' + JSON.stringify(product));
      let p = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        images: product.images,
        quantity: 1,
      };
      this.cartService.addToCart(p);
    } else {
      producto.quantity = producto.quantity + 1;
      this.cartService.addToCart(producto);
    }
    this.productos = this.cartService.getItems();
    this.messageService.add({
      severity: "success",
      detail: "Se agrega al carrito de compras",
    });

  }

  showDialog() {
    this.display = true;
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
