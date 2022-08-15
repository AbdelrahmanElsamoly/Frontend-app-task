import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HerosService {
  HeroColapse: any;
  constructor(private __AngularFirestore: AngularFirestore) {}

  // Hero firebasa data

  // display heroes taple
  getHerotaple() {
    return this.__AngularFirestore.collection('Hero').snapshotChanges();
  }

  // Get hero By id
  getHero(id: any) {
    return this.__AngularFirestore.collection('Hero').doc(id).valueChanges();
  }

  // Create anew Hero
  CreateHero(hero: any) {
    hero.id = this.__AngularFirestore.createId();
    return this.__AngularFirestore.collection('Hero').add(hero);
  }

  // delete Hero
  deleteHero(hero: Hero) {
    return this.__AngularFirestore.collection('Hero').doc(hero.id).delete();
  }

  // Update Hero
  UpdateHero(hero: Hero, id: any) {
    return this.__AngularFirestore.collection('Hero').doc(id).update({
      name: hero.name,
      rate: hero.rate,
      description: hero.description,
      powers: hero.powers,
    });
  }
}
