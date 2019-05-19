import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import {Button} from 'grommet'

class RGB extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
    
      _onButtonClick() {
        this.setState(prevState => ({
            showComponent: !prevState.showComponent
          }));
          console.log(this.state)
      }
      
    
      render() {
        return (
          <div>
            <Button onClick={this._onButtonClick} label='RGB'/>
            {this.state.showComponent ?
               <SketchPicker /> : null
            }
          </div>
        );
      }
}
export default RGB;