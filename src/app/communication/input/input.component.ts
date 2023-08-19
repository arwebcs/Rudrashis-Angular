import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/shared/model/Product.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  price: any = '';
  pname: any = '';

  constructor() {}

  @Output() onProductAdded = new EventEmitter<Product>();

  addProduct() {
    const items = { ProductName: this.pname, ProductPrice: this.price };
    this.onProductAdded.emit(items);
    this.pname = '';
    this.price = '';
  }
}
