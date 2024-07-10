export {}

interface SuccessResponse {
  status: 'success';
  data: string;
}

interface ErrorResponse {
  status: 'error';
  error: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

// Pattern matching can be achieved using if-else statements or switch statements to handle different cases of a discriminated union.
function handleResponse(response: ApiResponse) {
  if (response.status === 'success') {
      console.log(`Data: ${response.data}`);
  } else if (response.status === 'error') {
      console.log(`Error: ${response.error}`);
  }
}

handleResponse({ status: 'success', data: 'Hello' } as SuccessResponse);
handleResponse({ status: 'error', error: 'Not Found' } as ErrorResponse);
