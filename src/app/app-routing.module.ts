import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './allheroes/heroes/heroes.component';
import { ProfComponent } from './heroesprof/prof/prof.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
  {
    path: 'allheroes',
    component: HeroesComponent,
  },
  {
    path: '',
    redirectTo: 'allheroes',
    pathMatch: 'full',
  },
  {
    path: 'hero/:id',
    component: ProfComponent,
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
