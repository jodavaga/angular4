"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LeftComponent = (function () {
    function LeftComponent() {
    }
    LeftComponent = __decorate([
        core_1.Component({
            selector: 'app-left-section',
            template: "\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n        <ul class=\"left-list\">\n            <li>item $</li>\n            <li>item $</li>\n            <li>item $</li>\n        </ul>\n    </div>\n    ",
            styles: ["\n        .left-list{\n            border: 1px solid red;\n            height: 300px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LeftComponent);
    return LeftComponent;
}());
exports.LeftComponent = LeftComponent;
//# sourceMappingURL=left.component.js.map