export class Point {
    private x:number;
    private y:number;

    constructor(x:number, y:number) {
        [this.x, this.y] = [x, y];
    }

    toString():string {
        return `(${this.x}, ${this.y})`;
    }
}