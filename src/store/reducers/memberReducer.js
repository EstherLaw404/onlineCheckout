
const initialState = {
  members: [
      {id: 1, type: 'Associate', discount: '5'},
      {id: 2, type: 'Platinum', discount: '15'},
      {id: 3, type: 'Diamond', discount: '20'}
  ]
};
 
const memberReducer = (state = initialState, action) => {
    return state;
};
 
export default memberReducer;