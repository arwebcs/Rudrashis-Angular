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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
