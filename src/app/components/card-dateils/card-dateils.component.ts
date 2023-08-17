import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/types/products';

@Component({
  selector: 'app-card-dateils',
  templateUrl: './card-dateils.component.html',
  styleUrls: ['./card-dateils.component.scss']
})
export class CardDateilsComponent {
  @Input() product!: IProduct

  constructor(private router: Router, private cartService: CartService) { }

  back(): void {
    this.router.navigate(['/produtos'])
  }

  purchase(product: IProduct): void {
    this.cartService.incrementCounter(product)
  }
}
