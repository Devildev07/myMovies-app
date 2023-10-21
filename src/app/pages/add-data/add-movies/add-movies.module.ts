import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMoviesPageRoutingModule } from './add-movies-routing.module';

import { AddMoviesPage } from './add-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMoviesPageRoutingModule
  ],
  declarations: [AddMoviesPage]
})
export class AddMoviesPageModule {}
