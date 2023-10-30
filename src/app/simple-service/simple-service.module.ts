import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleServiceRoutingModule } from './simple-service-routing.module';
import { SimpleServiceComponent } from './simple-service.component';


@NgModule({
  declarations: [
    SimpleServiceComponent
  ],
  imports: [
    CommonModule,
    SimpleServiceRoutingModule
  ]
})
export class SimpleServiceModule { }
