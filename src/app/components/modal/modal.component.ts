import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/types/products';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private cartService: CartService) {}

  products: IProduct[] = []
  productSubscription: Subscription | undefined;

  mostrar: boolean = false;

  ngOnInit() {
    this.productSubscription = this.cartService.getProduct().subscribe(results => {
      this.products = results;
    });
  }

  toggle() {
    this.mostrar = !this.mostrar;
  }
}
