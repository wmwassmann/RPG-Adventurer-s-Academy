

import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    playScreen: {
      zIndex: '1',
      height: '560px',
    },
    
    charToolbar: {    
      position: 'fixed',
      
      zIndex: '100000'
    },
 
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
}));