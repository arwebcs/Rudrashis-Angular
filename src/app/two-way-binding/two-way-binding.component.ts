import { Component } from '@angular/core';
import { Product } from '../shared/model/Product.model';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent {
  price: any = '';
  pname: any = '';

  productList: Product[] = [];
  // productList: { ProductName: string; ProductPrice: number|null }[] = [];

  constructor() {}

  submit() {
    this.productList.push({
      ProductName: this.pname,
      ProductPrice: this.price,
    });
    this.pname = '';
    this.price = '';
  }
}
