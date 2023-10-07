import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveDrivenFormsComponent } from './reactive-driven-forms.component';

const routes: Routes = [{ path: '', component: ReactiveDrivenFormsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveDrivenFormsRoutingModule { }
