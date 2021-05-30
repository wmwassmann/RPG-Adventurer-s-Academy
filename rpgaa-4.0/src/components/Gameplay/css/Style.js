
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
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
    },
    answerBox: {
        position: 'relative',
        top: '60px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));