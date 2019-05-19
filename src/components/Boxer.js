import React from 'react'
import { Box } from 'grommet'
import Servos from './Servos'
import RGB from './RGB'
import Blinker from './Blinker'
import Checkboxes from './Checkboxes'


const Boxer = () => {
  return (
    <Box border={{ color: 'brand', size: 'medium' }} pad='medium' width='small' height='medium' >
     <Servos/>
     <br/>
     <Servos/>
     <br/>
     <Servos/>
     <RGB/>
     <br/>
     <Blinker/>
     <br/>
     <br/>
     <Checkboxes/>     
    </Box>
     )
    }
export default Boxer;

