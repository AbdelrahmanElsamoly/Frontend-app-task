import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SharedComponent, NavbarComponent],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  exports: [NavbarComponent, SharedComponent],
})
export class SharedModule {}
