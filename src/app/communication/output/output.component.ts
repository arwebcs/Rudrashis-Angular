import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/model/Product.model';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent {
  constructor() {}
  @Input('plist') productList: Product[] = [];
}
