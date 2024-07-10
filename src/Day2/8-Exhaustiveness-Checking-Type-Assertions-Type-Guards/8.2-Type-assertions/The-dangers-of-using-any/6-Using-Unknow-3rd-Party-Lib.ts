export {};

//import thirdPartyLib from "third-party-lib";

function processData(data: unknown) {
  if (typeof data === "string") {
    // const result = thirdPartyLib.processString(data);
    // console.log(`Result: ${result}`);
  } else {
    console.log("Invalid data format.");
  }
}
