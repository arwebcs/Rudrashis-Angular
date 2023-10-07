import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nav-route',
    pathMatch: 'full',
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },

  {
    path: 'nav-route',
    loadChildren: () =>
      import('./nav-route/nav-route.module').then((m) => m.NavRouteModule),
  },
  {
    path: 'td-forms',
    loadChildren: () =>
      import('./td-forms/td-forms.module').then((m) => m.TdFormsModule),
  },
  { path: 'reactive-driven-forms', loadChildren: () => import('./reactive-driven-forms/reactive-driven-forms.module').then(m => m.ReactiveDrivenFormsModule) },
  { path: 'cycles', loadChildren: () => import('./cycles/cycles.module').then(m => m.CyclesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
