// ES6!!!
import 'babel-core/polyfill';
import React from 'react';
import {Body} from './foo';

class _MainSection {
  render() {
    return (
      <div>
        <Body />
      </div>
    );
  }
}

export const MainSection = React.createClass(_MainSection.prototype);