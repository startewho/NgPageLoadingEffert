import { Component,
  Inject,
  ViewContainerRef } from '@angular/core';

import { Effect } from './effect';

import { PageLoadingService } from './page-loading/page-loading.service';

const EFFECTS: Effect[] = [
  { id: 0, name: 'Mr. Nice' },
  { id: 1, name: 'Narco' },
  { id: 2, name: 'Bombasto' },
  { id: 3, name: 'Celeritas' },
  { id: 4, name: 'Magneta' },
  { id: 5, name: 'RubberMan' },
  { id: 6, name: 'Dynama' },
  { id: 7, name: 'Dr IQ' },
  { id: 8, name: 'Magma' },
  { id: 9, name: 'Tornado' }
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
constructor ( @Inject(PageLoadingService) private pageservice : PageLoadingService,
 @Inject(ViewContainerRef) private viewContainerRef: ViewContainerRef)
{
  pageservice.setRootViewContainerRef(this.viewContainerRef);
  
}

  title = 'Tour of Effects';
  effects = EFFECTS;
  selectedEffect: Effect;
  onSelect(effect: Effect): void {
    this.selectedEffect = effect;
  }
}
