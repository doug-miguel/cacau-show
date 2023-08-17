import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from 'src/app/services/get-products.service';
import { IProduct } from 'src/app/types/products';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  product!: IProduct;

  constructor(
    private getProducts: GetProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.getProducts.getProductId(id).subscribe((results) => {
      this.product = results
    })
  }
}
