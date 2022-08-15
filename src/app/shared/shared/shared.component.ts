import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroesComponent } from 'src/app/allheroes/heroes/heroes.component';
import { HerosService } from 'src/app/heros.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
})
export class SharedComponent implements OnInit {
  // power range to display in select input
  powerRange: any[] = [1, 2, 3, 4, 5];
  url: any;
  // Hero form Information
  heroInform: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    powers: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    rate: new FormControl(1, [Validators.required]),
  });

  constructor(
    private __HerosService: HerosService,
    private __HeroesComponent: HeroesComponent
  ) {}

  ngOnInit(): void {}

  //Post Hero to Api
  heroAdd() {
    this.__HerosService.CreateHero(this.heroInform.value);
    this.__HeroesComponent.getHeroes();
    this.heroInform.reset();
    this.__HeroesComponent.sortName();
  }

  // upload img
}
