import { Point } from "./Point";
import { Rectangle } from "./Rectangle";

let p1:Point = new Point(1, 2);
let p2:Point = new Point(3, 4);
let r1:Rectangle = new Rectangle(p1, p2);

console.log(`Point p1 is: ${p1.toString()}`);
console.log(`Rectangle r1 is: ${r1.toString()}`);