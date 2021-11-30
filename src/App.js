import React, { Component } from 'react';
import Root from './Root';
import View from './view';

export class App extends Component {
  render() {
    return (
      <>
        <Root>
          <View />
        </Root>
      </>
    );
  }
}

export default App;
