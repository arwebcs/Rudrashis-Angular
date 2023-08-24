import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavRouteComponent } from './nav-route.component';
import { DirectiveComponent } from '../directive/directive.component';
import { PipesComponent } from '../pipes/pipes.component';

const routes: Routes = [
  {
    path: '',
    component: NavRouteComponent,
  },
  {
    path: ':navid',
    component: NavRouteComponent,
  },
  // {
  //   path: 'navr',
  //   children: [
  //     {
  //       path: 'directive',
  //       component: DirectiveComponent,
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavRouteRoutingModule {}
