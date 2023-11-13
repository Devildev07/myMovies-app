import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMoviesPageRoutingModule } from './update-movies-routing.module';

import { UpdateMoviesPage } from './update-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateMoviesPageRoutingModule
  ],
  declarations: [UpdateMoviesPage]
})
export class UpdateMoviesPageModule {}
