import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HerosService } from '../../heros.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  allHeroes: Hero[] = [];
  name: string = '';
  isChange: boolean = false;
  arr: any[] = [];
  isloaded: boolean = false;
  constructor(private hrSer: HerosService) {}
  ngOnInit(): void {
    this.getHeroes();
    this.sortName();
  }

  //display hero in the taple
  getHeroes() {
    this.hrSer.getHerotaple().subscribe((res) => {
      this.isloaded = true;
      this.allHeroes = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
      this.sortName();
    });
  }

  // delete heroes function
  delHero(hero: any) {
    if (confirm('Are you sure to delete ' + hero.name)) {
      this.hrSer.deleteHero(hero);
      this.getHeroes();
    }
  }

  //_______________________sort function _____________________

  // sortArrayByBower
  sortBower() {
    this.allHeroes = this.allHeroes.sort((a, b) => {
      return +b.rate - +a.rate;
    });
  }

  // sortArrayByName
  sortName() {
    this.allHeroes = this.allHeroes.sort((a, b) => {
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      } else if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  changeBoolean() {
    this.isChange = !this.isChange;
    if (this.isChange == true) {
      this.sortBower();
    } else {
      this.sortName();
    }
  }
}
