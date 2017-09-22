"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var page_loading_service_1 = require("./page-loading/page-loading.service");
var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(pageloading) {
        this.pageloading = pageloading;
    }
    HeroDetailComponent.prototype.showA = function () {
        this.pageloading.Show();
    };
    HeroDetailComponent.prototype.hideA = function () {
        this.pageloading.Hide();
    };
    __decorate([
        core_1.Input()
    ], HeroDetailComponent.prototype, "hero");
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'hero-detail',
            template: "\n    <div *ngIf=\"hero\" style=\"z-index:-1;\">\n      <h2>{{hero.name}} details!</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n      <button (click)=\"showA()\">\u663E\u793A</button>\n      <button (click)=\"hideA()\">\u9690\u85CF</button>\n    </div>\n  "
        }),
        __param(0, core_1.Inject(page_loading_service_1.PageLoadingService))
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
