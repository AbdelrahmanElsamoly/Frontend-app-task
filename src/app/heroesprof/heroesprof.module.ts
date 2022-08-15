import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfComponent } from './prof/prof.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { AllheroesModule } from '../allheroes/allheroes.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ProfComponent],
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule,
    AllheroesModule,
    ReactiveFormsModule,
  ],
  exports: [AllheroesModule],
})
export class HeroesprofModule {}
