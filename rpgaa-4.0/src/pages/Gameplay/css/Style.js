

import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    playScreen: {
      zIndex: '1'
    },
    
    charToolbar: {    
      position: 'fixed',
      top: '636px',
      zIndex: '100000'
    },
 
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
}));