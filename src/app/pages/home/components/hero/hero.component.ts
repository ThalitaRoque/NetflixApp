import { Component, Input, OnInit } from '@angular/core';
import { Film, Hero } from '../../models/NetflixApp';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input () hero!:Film

  constructor() { }

  ngOnInit(): void {
  }

}
