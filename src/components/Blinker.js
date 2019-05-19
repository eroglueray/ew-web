import React, { Component } from 'react'
import { Select } from 'grommet';

const OPTIONS = ['0', '1', '2','3','4','5'];

class Blinker extends Component {
  state = { value: [], options: OPTIONS }

  render() {
    const { options, value } = this.state;
    return (
        <Select
          multiple={true}
          value={value}
          onSearch={(searchText) => {
            const regexp = new RegExp(searchText, 'i');
            this.setState({ options: OPTIONS.filter(o => o.match(regexp)) });
          }}
          onChange={event => this.setState({
            value: event.value,
            options: OPTIONS,
          })}
          options={options}
        />
        );
    }
}
export default Blinker;
