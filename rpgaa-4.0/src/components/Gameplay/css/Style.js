import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    textButton: {
        borderRadius: '50%',
        width: '50px',
        height: '50px'
    },
    container: {
        paddingTop: '20px;',
        paddingLeft: '20px;',
        paddingRight: '20px;'
    },
    nextButton: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'flex-end'
       
    },
    dialogBox: {
        height: '150px',
        width: '300px'
        
    }
}));