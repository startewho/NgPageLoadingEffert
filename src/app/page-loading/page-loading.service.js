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
/**
 * PageLoadingService
 */
var core_1 = require("@angular/core");
var page_loading_component_1 = require("./page-loading.component");
var PageLoadingService = /** @class */ (function () {
    function PageLoadingService(_factoryResolver) {
        this._factoryResolver = _factoryResolver;
    }
    PageLoadingService.prototype.setRootViewContainerRef = function (viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
        this.getpageloading();
    };
    PageLoadingService.prototype.getpageloading = function () {
        if (this._loading == null) {
            var factory = this._factoryResolver.resolveComponentFactory(page_loading_component_1.PageLoadingComponent);
            var component = factory.create(this.rootViewContainer.parentInjector);
            this._loading = component.instance;
            this.rootViewContainer.insert(component.hostView);
        }
        return this._loading;
    };
    PageLoadingService.prototype.Show = function () {
        this.getpageloading().show();
    };
    PageLoadingService.prototype.Hide = function () {
        this.getpageloading().hide();
    };
    PageLoadingService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.ComponentFactoryResolver))
    ], PageLoadingService);
    return PageLoadingService;
}());
exports.PageLoadingService = PageLoadingService;
