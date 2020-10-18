import React, { Component } from 'react';
import ErrorBoundary from './hoc/ErrorBoundary';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Blog />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
