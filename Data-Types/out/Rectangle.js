"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(p1, p2) {
        var _a;
        _a = [p1, p2], this.p1 = _a[0], this.p2 = _a[1];
    }
    Rectangle.prototype.toString = function () {
        return "[" + this.p1.toString() + ", " + this.p2.toString() + "]";
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map