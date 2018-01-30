"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../src/Trait");
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('This animal eatttt.');
    };
    ;
    return Animal;
}());
exports.Animal = Animal;
var Human = (function () {
    function Human() {
    }
    Human.prototype.eat = function () { };
    ;
    __decorate([
        Trait_1.Trait(Animal)
    ], Human.prototype, "eat", null);
    return Human;
}());
exports.Human = Human;
var human = new Human();
human.eat();
//# sourceMappingURL=hello-world.js.map