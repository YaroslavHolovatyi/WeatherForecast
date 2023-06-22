import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MaterialModule } from 'src/app/supplies/material.module';
import { NavbarSearchComponent } from 'src/app/molecula/navbar/navbar-search/navbar-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    NavbarSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    NavbarSearchComponent
  ]
})
export class NavbarModule { }
