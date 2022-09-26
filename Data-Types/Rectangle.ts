import { Point } from "./Point";

export class Rectangle {
    private p1:Point;
    private p2:Point;

    constructor(p1:Point, p2:Point) {
        [this.p1, this.p2] = [p1, p2];
    }

    toString():string {
        return `[${this.p1.toString()}, ${this.p2.toString()}]`;
    }
}