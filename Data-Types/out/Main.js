"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./Point");
var Rectangle_1 = require("./Rectangle");
var p1 = new Point_1.Point(1, 2);
var p2 = new Point_1.Point(3, 4);
var r1 = new Rectangle_1.Rectangle(p1, p2);
setTimeout(function () {
    console.log('Hello, World!');
}, 2000);
console.log("Point p1 is: " + p1.toString());
console.log("Rectangle r1 is: " + r1.toString());
//# sourceMappingURL=Main.js.map