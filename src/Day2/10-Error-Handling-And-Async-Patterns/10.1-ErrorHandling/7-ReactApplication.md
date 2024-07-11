
# React Getting Started

check if npx not installed, install it
create a new directory

```bash
npm install -g npx
mkdir react-app
cd react-app
npx create-react-app demo-app --template typescript
```

## Sample code handle ErrorBoundary
```typescript


import React, { Component } from 'react';

// Error boundary component
class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: any) {
    // Update state to indicate error
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // Log error to an error reporting service
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when error occurs
      return (
        <div>
          <h1>Something went wrong!</h1>
          <p>{this.state.error.toString()}</p>
        </div>
      );
    }

    // Render children normally
    return this.props.children;
  }
}

// Example component that may throw an error
class MyComponent extends Component {
  render() {
    // Simulate an error by accessing an undefined property
    return <h2>{this.props.data.title}</h2>;
  }
}

// Usage of error boundary component
const App = () => (
  <ErrorBoundary>
    <MyComponent data={{}} />
  </ErrorBoundary>
);

export default App;
```

## Error Boundary

In this example:

* We create an ErrorBoundary component that extends React.Component.
* Within ErrorBoundary, we define getDerivedStateFromError and componentDidCatch lifecycle methods to catch errors thrown by its children components.
* In the render method of ErrorBoundary, we check if an error has occurred (this.state.hasError). If so, we render a fallback UI.
* We create a MyComponent component that may throw an error by attempting to access an undefined property (this.props.data.title).
* We wrap MyComponent with the ErrorBoundary component in the App component to catch and handle any errors that occur within MyComponent.
* With Error Boundaries, React applications can gracefully handle errors in specific parts of the UI without crashing the entire application, providing a better user experience and easier debugging.
  