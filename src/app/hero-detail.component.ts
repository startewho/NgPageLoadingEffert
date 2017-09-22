import { Component, Input, Inject } from '@angular/core';
import { Hero } from './hero';
import {PageLoadingService} from './page-loading/page-loading.service';
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero" style="z-index:-1;">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click)="showA()">显示</button>
      <button (click)="hideA()">隐藏</button>
    </div>
  `
})


export class HeroDetailComponent {
  constructor(@Inject(PageLoadingService) private  pageloading: PageLoadingService){

  }

  showA(): void {
   this.pageloading.Show();
  }

  hideA(): void {
   this.pageloading.Hide();

  }

  @Input() hero: Hero;
}

