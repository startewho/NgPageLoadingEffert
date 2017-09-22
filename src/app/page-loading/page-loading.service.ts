/**
 * PageLoadingService
 */
import { Injectable , Inject, ComponentFactoryResolver, ReflectiveInjector , ViewContainerRef} from '@angular/core';

import { DOCUMENT } from '@angular/common';

import { PageLoadingComponent } from './page-loading.component';



@Injectable()
export class PageLoadingService {
    private _loading: PageLoadingComponent;

    rootViewContainer: ViewContainerRef;

    constructor(@Inject(ComponentFactoryResolver) private  _factoryResolver: ComponentFactoryResolver) {
      }

    setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
        this.rootViewContainer = viewContainerRef;
        this.getpageloading();
    }


    getpageloading (): PageLoadingComponent {

      if ( this._loading == null ) {
        const factory = this._factoryResolver.resolveComponentFactory(PageLoadingComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        this._loading = component.instance;
        this.rootViewContainer.insert(component.hostView);
      }
      return this._loading;
    }

   public Show (index: number, timeSpance: number) {
        this.getpageloading().show(index, timeSpance);
    }
   public Hide() {
       this.getpageloading().hide();
   }

}
