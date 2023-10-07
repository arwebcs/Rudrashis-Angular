import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveDrivenFormsRoutingModule } from './reactive-driven-forms-routing.module';
import { ReactiveDrivenFormsComponent } from './reactive-driven-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveDrivenFormsComponent],
  imports: [
    CommonModule,
    ReactiveDrivenFormsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ReactiveDrivenFormsModule {}
