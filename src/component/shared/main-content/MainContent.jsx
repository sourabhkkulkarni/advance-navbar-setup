import React from 'react';
import { styled } from '@mui/material/styles';


const PREFIX = 'MainContent';

const classes = {
  root: `${PREFIX}-root`,
};

const Root = styled('div')(() => ({
  [`&.${classes.root}`]: {
    width: '100%',
    flexGrow: 1,
  },
}));

const MainContent = ({ children }) => (
  <Root className={`container ${classes.root}`}>
    {children}
  </Root>
);



export default MainContent;