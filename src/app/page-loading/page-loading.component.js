"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var d3 = require("d3");
var PageLoadingComponent = /** @class */ (function () {
    function PageLoadingComponent() {
        this.isAnimating = false;
        this.efferts = [
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
                opening: 'M 40 -21.875 C 11.356078 -21.875 -11.875 1.3560784 -11.875 30 C -11.875 58.643922 11.356078 81.875 40 81.875 C 68.643922 81.875 91.875 58.643922 91.875 30 C 91.875 1.3560784 68.643922 -21.875 40 -21.875 Z',
                path: 'M40,30 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 Z',
                speedIn: 300,
                easingIn: 'easeinout'
            }
        ];
    }
    PageLoadingComponent.prototype.ngOnInit = function () {
    };
    PageLoadingComponent.prototype.ngAfterViewInit = function () {
        this.svg = d3.select('svg');
        this.path = this.svg.select('path');
    };
    PageLoadingComponent.prototype.ngOnDestroy = function () {
        console.log('被销毁');
    };
    PageLoadingComponent.prototype.show = function () {
        var _this = this;
        this.efforoption = this.getOpt(this.efferts[1]);
        this.path.attr('d', this.efforoption.initialPath);
        this.isAnimating = true;
        var that = this;
        this.rootDiv.nativeElement.classList.add('show');
        this.animateSVG('in', this.efforoption, function () {
            _this.rootDiv.nativeElement.classList.add('pageloading-loading');
        });
        setTimeout(function () {
            that.hide();
        }, 1800);
    };
    PageLoadingComponent.prototype.hide = function () {
        this.rootDiv.nativeElement.classList.remove('show');
        this.rootDiv.nativeElement.classList.remove('pageloading-loading');
    };
    PageLoadingComponent.prototype.getOpt = function (newEffect) {
        var initialPath, openingSteps, openingStepsStr, openingStepsTotal, closingSteps, closingStepsStr, closingStepsTotal, speedOut, easingOut;
        var effectObj = this.efferts[1];
        initialPath = effectObj.path;
        openingStepsStr = effectObj.opening;
        openingSteps = openingStepsStr ? openingStepsStr.split(';') : '';
        openingStepsTotal = openingStepsStr ? openingSteps.length : 0;
        closingStepsStr = initialPath;
        closingSteps = closingStepsStr ? closingStepsStr.split(';') : '';
        closingStepsTotal = closingStepsStr ? closingSteps.length : 0;
        speedOut = effectObj.speedIn;
        easingOut = effectObj.easingIn;
        var animateOpt = {
            initialPath: initialPath,
            openingSteps: openingSteps,
            openingStepsTotal: openingStepsTotal,
            closingSteps: closingSteps,
            closingStepsTotal: closingStepsTotal,
            speedOut: speedOut,
            easingOut: easingOut,
            speedIn: effectObj.speedIn,
            easingIn: effectObj.easingIn
        };
        return animateOpt;
    };
    PageLoadingComponent.prototype.animateSVG = function (dir, animateOpt, cbk) {
        var self = this, steps = dir === 'out' ? animateOpt.closingSteps : animateOpt.openingSteps, stepsTotal = dir === 'out' ? animateOpt.closingStepsTotal : animateOpt.openingStepsTotal, speed = dir === 'out' ? animateOpt.speedOut : animateOpt.speedIn, easing = dir === 'out' ? animateOpt.easingOut : animateOpt.easingIn;
        var nextStep;
        var postion = 0;
        nextStep = function (pos) {
            if (pos > stepsTotal - 1) {
                if (cbk && typeof cbk === 'function') {
                    cbk();
                }
                return;
            }
            self.path.transition().attr('d', steps[pos]);
            pos++;
        };
        nextStep(postion);
    };
    __decorate([
        core_1.ViewChild('pageloader')
    ], PageLoadingComponent.prototype, "rootDiv");
    PageLoadingComponent = __decorate([
        core_1.Component({
            selector: 'app-page-loading',
            templateUrl: './page-loading.component.html',
            styleUrls: ['./page-loading.component.css']
        })
    ], PageLoadingComponent);
    return PageLoadingComponent;
}());
exports.PageLoadingComponent = PageLoadingComponent;
