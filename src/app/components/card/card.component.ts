import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/types/products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() dataSource: IProduct[] = []

  constructor(private router: Router, private cartService: CartService) { }

  detailsId(id: number): void {
    this.router.navigate(['produtos/detalhe/' + id])
  }

  purchase(product: IProduct): void {
    this.cartService.incrementCounter(product)
  }
}
