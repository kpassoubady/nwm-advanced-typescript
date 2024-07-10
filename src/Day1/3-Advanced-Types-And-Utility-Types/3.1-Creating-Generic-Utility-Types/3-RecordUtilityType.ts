export { };

type Point = {
    x: number;
    y: number;
};

type PointMap = Record<string, Point>;

let points: PointMap = {
    "a": { x: 1, y: 2 },
    "b": { x: 3, y: 4 },
    "c": { x: 5, y: 6 },
   // "d": { x: "5", y: "6"},
};

console.log(points);
// Kangs --> Address
// Addy --> Address
// map (key, value);
