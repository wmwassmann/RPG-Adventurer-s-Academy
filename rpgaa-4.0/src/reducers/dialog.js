import { FETCH_DIALOG } from '../constants/actionTypes';

export default (dialogs = [], action) => {
  switch (action.type) { 
    case FETCH_DIALOG:
      
      return action.payload;
    default:
      return dialogs;
  }
};

// console.log('FETCH_DIALOG', 'this')

// export const dialog = () => (dispatch, getState) => {
//   const npc = getState().npc;
//   fetch('http://localhost:5000/dialogs', {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(npc)
//   })
//   alert('success')
// }