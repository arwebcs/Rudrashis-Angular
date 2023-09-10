import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdFormsRoutingModule } from './td-forms-routing.module';
import { TdFormsComponent } from './td-forms.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TdFormsComponent],
  imports: [CommonModule, TdFormsRoutingModule, FormsModule],
})
export class TdFormsModule {}
