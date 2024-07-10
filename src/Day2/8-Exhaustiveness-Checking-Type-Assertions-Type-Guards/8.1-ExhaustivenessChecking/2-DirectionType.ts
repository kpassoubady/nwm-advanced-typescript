type Direction = "north" | "south" | "east" | "west" ;

/*
we have added a default case to the switch statement and 
we have declared a variable exhaustiveCheck of type never. 
In the default case, we assign the direction parameter to the exhaustiveCheck variable, 
which will trigger a compile-time error if we have missed any of the cases. 
When we pass an argument that is not a valid Direction, the TypeScript compiler will show an error 
indicating that the argument is not assignable to the Direction type. 
*/

function move(direction: Direction) {
  switch (direction) {
    case "north":
      console.log("Moving north");
      break;
    case "south":
      console.log("Moving south");
      break;
    case "east":
      console.log("Moving east");
      break;
    case "west":
      console.log("Moving west");
      break;
    default:
      const exhaustiveCheck: never = direction;
  }
}

move("north"); // Moving north
move("south"); // Moving south
move("east"); // Moving east
move("west"); // Moving west
// move("up"); // Argument of type '"up"' is not assignable to parameter of type 'Direction'.
