import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMoviesPage } from './update-movies.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMoviesPageRoutingModule {}
