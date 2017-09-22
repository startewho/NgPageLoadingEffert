import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, animate } from '@angular/core';
import { animation, AnimationPlayer } from "@angular/animations";
import * as d3 from 'd3';




// 物资基本信息（名称等关键信息）
export interface IEffect {
  name: string;
  opening: string;
  path: string;
  speedIn: number;
  easingIn: string;
}

export interface ISettingOption {
  effect: IEffect;
  el: Element;

}


// 特效配置选项(详细信息)
export interface IEffectOptions {
  initialPath: string;
  openingSteps: string[];
  openingStepsTotal: number;
  closingSteps: string[];
  closingStepsTotal: number;
  speedOut: string;
  easingOut: string;
  speedIn: number;
  easingIn: string;
}



@Component({
  selector: 'app-page-loading',
  templateUrl: './page-loading.component.html',
  styleUrls: ['./page-loading.component.css']
})



export class PageLoadingComponent implements OnInit, AfterViewInit, OnDestroy {


  @ViewChild('pageloader') rootDiv: ElementRef;

  private isAnimating = false;
 
  private efforoption: IEffectOptions;

  private svg: d3.Selection<SVGGElement, any, HTMLElement, any>;

  private path: d3.Selection<SVGGElement, any, HTMLElement, any>;

  private readonly efferts: ReadonlyArray<IEffect> = [
    {
      name: 'Windscreen wiper',
      opening: 'M150 0 L75 200 L225 200 Z',
      path: 'M150 0 L75 200 L225 200 Z',
      speedIn: 400,
      easingIn: 'easeinout'
    },
    {
      name: 'Cirle',
      // tslint:disable-next-line:max-line-length
      opening: 'M20,15 50,30 50,30 30,30 Z;M0,0 80,0 50,30 20,45 Z;M0,0 80,0 60,45 0,60 Z;M0,0 80,0 80,60 0,60 Z',
      path: 'M30,30 50,30 50,30 30,30 Z',
      speedIn: 300,
      easingIn: 'easeinout'
    }
  ];



  constructor() { }

  ngOnInit() {
  }



  ngAfterViewInit() {

    this.svg = d3.select<SVGAElement, any>('svg');
    this.path = this.svg.select<SVGGElement>('path');
  }

  ngOnDestroy() {
    console.log('被销毁');
  }

  public show(): void {


    this.efforoption = this.getOpt(this.efferts[1]);

    this.path.attr ('d', this.efforoption.initialPath);

    this.isAnimating = true;

    const that = this;

    (this.rootDiv.nativeElement as Element).classList.add('show');
    
    this.animateSVG('in', this.efforoption, () => {
      (this.rootDiv.nativeElement as Element).classList.add('pageloading-loading');
      setTimeout(function () {
        that.hide();
      }, 200);
      
    });

 
   
  }

  public hide(): void {
    (this.rootDiv.nativeElement as Element).classList.remove('show');
    (this.rootDiv.nativeElement as Element).classList.remove('pageloading-loading');
  }


  private getOpt(newEffect: IEffect): IEffectOptions {
    let initialPath,
      openingSteps,
      openingStepsStr: string,
      openingStepsTotal,
      closingSteps,
      closingStepsStr,
      closingStepsTotal,
      speedOut,
      easingOut;

    const effectObj = this.efferts[1];
  
    
    initialPath = effectObj.path;

    openingStepsStr = effectObj.opening;
    openingSteps = openingStepsStr ? openingStepsStr.split(';') : '';
    openingStepsTotal = openingStepsStr ? openingSteps.length : 0;

    closingStepsStr = initialPath;
    closingSteps = closingStepsStr ? closingStepsStr.split(';') : '';
    closingStepsTotal = closingStepsStr ? closingSteps.length : 0;

    speedOut = effectObj.speedIn;
    easingOut = effectObj.easingIn;

    const animateOpt = {
      initialPath: initialPath,
      openingSteps: openingSteps,
      openingStepsTotal: openingStepsTotal,
      closingSteps: closingSteps,
      closingStepsTotal: closingStepsTotal,
      speedOut: speedOut,
      easingOut: easingOut,
      speedIn: effectObj.speedIn,
      easingIn: effectObj.easingIn
    } as IEffectOptions;

    return animateOpt;
  }

  animateSVG(dir: string, animateOpt: IEffectOptions, cbk: Function): void {
    const self = this,
      steps = dir === 'out' ? animateOpt.closingSteps : animateOpt.openingSteps,
      stepsTotal = dir === 'out' ? animateOpt.closingStepsTotal : animateOpt.openingStepsTotal,
      speed = dir === 'out' ? animateOpt.speedOut : animateOpt.speedIn,
      easing = dir === 'out' ? animateOpt.easingOut : animateOpt.easingIn;

    let nextStep: Function;
    const postion = 0;

    nextStep = function (pos: number) {
      if (pos > stepsTotal - 1) {
        if (cbk && typeof cbk === 'function') {
          cbk();
        }
        return;
      }

     (self. path)
     .transition('')
     .duration(100)
     .attr('d', steps[pos]).on('end', () => {
      pos++;
      nextStep(pos);
     } );
    
  
    };

    nextStep(postion);
  }


}


