import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  constructor() {}
  pipeName = 'Rudrashis Deb';
  dateExample = Date.now();
  jsonEx = { username: 'rudra', title: 'Mr.' };
  currencyEx = 345678;
  percentage = 0.65623652;

  status = new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('active');
    }, 5000);
  });
}
