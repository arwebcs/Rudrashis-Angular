import { Component } from '@angular/core';

@Component({
  selector: 'app-cycles',
  templateUrl: './cycles.component.html',
  styleUrls: ['./cycles.component.css'],
})
export class CyclesComponent {
  constructor() {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngDoCheck() {
    console.log(
      'ngDoCheck-> It does not always called, it only calls when there is any updation on a page. Its rarely is in use'
    );
  }

  ngDestroy() {
    console.log('ngDestroy. It destroys any instance');
  }
}
