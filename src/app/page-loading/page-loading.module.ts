import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageLoadingComponent } from './page-loading.component';
import {PageLoadingService} from './page-loading.service';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    PageLoadingComponent,
  ],
  providers: [
      PageLoadingService
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ PageLoadingComponent],
  entryComponents: [PageLoadingComponent]
})
export class PageLoadingModule {
}
