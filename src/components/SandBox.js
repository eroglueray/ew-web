import React from 'react';
import { Box, Grid, RoutedButton } from 'grommet';
import { Apps } from 'grommet-icons';

const SandBox = (props) => {
 return (
 <Grid>
    <Box align='start'>
      <RoutedButton icon={<Apps />} path='/' hoverIndicator={true} />
    </Box>
    <Box {...props} />
  </Grid>
  )
}

SandBox.defaultProps = {
  align: 'center',
  pad: 'large',
};

export default SandBox;
