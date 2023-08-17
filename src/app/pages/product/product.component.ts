import { Component, OnInit } from '@angular/core';
import { GetProductsService } from 'src/app/services/get-products.service';
import { IProduct } from 'src/app/types/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private getProduicts: GetProductsService) { }

  dataSource!: IProduct[]

  ngOnInit(): void {
    this.getProduicts.getProducts().subscribe((results) => {
      this.dataSource = results
    });
  }
}
