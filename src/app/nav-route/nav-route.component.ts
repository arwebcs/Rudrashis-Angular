import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nav-route',
  templateUrl: './nav-route.component.html',
  styleUrls: ['./nav-route.component.css'],
})
export class NavRouteComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  navID: number = 0;
  name: string = '';
  age: number = 0;

  ngOnInit(): void {
    //Using snapshot
    //this.navID = this.activatedRoute.snapshot.params['navid'];
    //Using observable
    this.activatedRoute.params.subscribe((res) => {
      this.navID = res['navid'];
    });
  }
  query() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.name = params['name'];
      this.age = params['age'];
    });
  }
  goPage(url: any, params: string = '') {
    this.router.navigate([url, params]);
  }
}
