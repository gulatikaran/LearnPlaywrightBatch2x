interface Point {
    readonly x: number;
    readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 5; // This is not possible as x is a read-only.

//Readonly Array
interface Date {
    readonly items: readonly number[];
}