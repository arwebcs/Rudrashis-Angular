import { Component } from '@angular/core';
import { Product } from './shared/model/Product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'String Interpolation';
  num: number = 0;
  bool: boolean = true;
  anyString: any = 'Any type';

  listProduct: Product[] = [];

  myFunction() {
    return this.num;
  }
  myParams(a: number) {
    return a;
  }
  constructor() {}

  getProduct(data: Product) {
    this.listProduct.push(data);
  }
}
