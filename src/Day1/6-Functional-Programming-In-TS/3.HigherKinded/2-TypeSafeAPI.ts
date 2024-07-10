export { };

// Real-life situation: 
// Designing type-safe APIs where TypeScript's type system enforces correct usage and prevents errors at compile time.

// Type-level programming for type-safe APIs
type APIResponse<T> =
  {
    status: "success";
    data: T;
  } |
  {
    status: "error";
    error: string;
  };

function fetchData(isFail: boolean): APIResponse<number> {
  // Simulating API call
  // let returnedData = aMethodRemoteCall();
  if (isFail) {
    return { status: "error", error: "Failed to fetch data" };
  } else {
    return { status: "success", data: 100 };
  }
}

const response = fetchData(true);
//const response = fetchData(false);

if (response.status === "success") {
  console.log(response.data); // TypeScript infers response.data as number
} else {
  console.error(response.error); // TypeScript ensures error handling
}
