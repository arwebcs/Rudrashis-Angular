import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRouteRoutingModule } from './nav-route-routing.module';
import { NavRouteComponent } from './nav-route.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavRouteComponent],
  imports: [CommonModule, NavRouteRoutingModule, RouterModule],
})
export class NavRouteModule {}
