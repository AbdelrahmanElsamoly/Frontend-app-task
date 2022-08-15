import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/hero';
import { HerosService } from 'src/app/heros.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css'],
})
export class ProfComponent implements OnInit {
  heroDetails: Hero[] = [];

  isloaded: boolean = false;
  // power range
  powerRange: any[] = [2, 3, 4, 5];

  // Hero form Information
  updatedHero: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    powers: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    rate: new FormControl('', [Validators.required]),
  });

  constructor(
    private __ActivatedRoute: ActivatedRoute,
    private __HerosService: HerosService
  ) {
    let id: any = __ActivatedRoute.snapshot.paramMap.get('id');
    this.getHeroId(id);
  }

  ngOnInit(): void {}
  // display Hero in profile page
  getHeroId(id: any) {
    this.__HerosService.getHero(id).subscribe((res: any) => {
      this.isloaded = true;
      if (this.heroDetails.length === 0) {
        this.heroDetails.push(res);
        console.log(this.heroDetails);
        this.updatedHero.controls.name.setValue(res.name);
        this.updatedHero.controls.powers.setValue(res.powers);
        this.updatedHero.controls.description.setValue(res.description);
        this.updatedHero.controls.rate.setValue(res.rate);
      } else if (this.heroDetails.length > 1) {
        this.heroDetails.length = 0;
      }
    });
  }

  // update hero Information
  upDate() {
    this.__HerosService.UpdateHero(
      this.updatedHero.value,
      this.__ActivatedRoute.snapshot.params.id
    );
    this.heroDetails.pop();
    this.heroDetails.push(this.updatedHero.value);
  }
}
