
const initialState = {
  specials: [
	  {id: 1, member: 1, product: 6, volume: 2, price: null, getDeal: true, dealVolume: 3 },
      {id: 2, member: 2, product: 1, volume: 5, price: 2888.99, getDeal: false, dealVolume: 0 },
      {id: 3, member: 2, product: 2, volume: 1, price: 3000.00, getDeal: false, dealVolume: 0 },
      {id: 4, member: 2, product: 3, volume: 4, price: null, getDeal: true, dealVolume: 5 },
      {id: 5, member: 3, product: 1, volume: 3, price: 2588.99, getDeal: false, dealVolume: 0 },
      {id: 6, member: 3, product: 2, volume: 1, price: 2500.00, getDeal: false, dealVolume: 0 },
      {id: 7, member: 3, product: 3, volume: 2, price: null, getDeal: true, dealVolume: 3 }
  ]
};
 
const specialReducer = (state = initialState, action) => {
 console.log('specialReducer.js');
    return state;
};
 
export default specialReducer;