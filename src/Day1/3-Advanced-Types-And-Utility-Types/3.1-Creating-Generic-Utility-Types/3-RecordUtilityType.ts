export { };

type Point = {
    x: number;
    y: number;
};

type PointMap = Record<string, Point|undefined>;

let points: PointMap = {
    "apple": { x: 1, y: 2 },
    "banana": { x: 3, y: 4 },
    "cherry": { x: 5, y: 6 },
   // "d": { x: "5", y: "6"},
};

console.log(points);
// Kangs --> Address
// Addy --> Address
// map (key, value);
