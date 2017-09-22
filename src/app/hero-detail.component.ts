import { Component, Input, Inject } from '@angular/core';
import { Effect } from './effect';
import {PageLoadingService} from './page-loading/page-loading.service';


@Component({
  selector: 'effect-detail',
  template: `
    <div *ngIf="effect" style="z-index:-1;">
      <h2>{{effect.name}} details!</h2>
      <div><label>id: </label>{{effect.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="effect.name" placeholder="name"/>
      </div>
      <button type="button" class="btn btn-primary waves-light" (click)="showA()" mdbRippleRadius>展示</button>
      
      </div>
  `
})


export class HeroDetailComponent {


  @Input() effect: Effect;
  constructor(@Inject(PageLoadingService) private  pageloading: PageLoadingService)
  {

  }

  showA(): void {
   this.pageloading.Show(this.effect.id, 300);
  }

  hideA(): void {
   this.pageloading.Hide();

  }

}

