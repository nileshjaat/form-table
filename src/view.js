import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './View/Home/Home';

export class View extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default View;
