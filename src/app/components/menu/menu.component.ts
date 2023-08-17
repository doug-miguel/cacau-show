import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/types/products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(private cartService: CartService) { }
  products: IProduct[] = []
  productSubscription: Subscription | undefined;
  name!: string | null


  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.productSubscription = this.cartService.getProduct().subscribe(results => {
      this.products = results;
    });
  }
}
