import React, { Component } from 'react';
import { RangeInput } from 'grommet';

class Servos extends Component {
  state = { value: 59 }

  render() {
    const { value } = this.state;
    return (
     
        <RangeInput
          value={value}
          min={0}
          max={180}
          step={1}
          onChange={event => this.setState({ value: event.target.value })}
        />
    );
  }
}

export default Servos;