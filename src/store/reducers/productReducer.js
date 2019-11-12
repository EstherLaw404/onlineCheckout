const initialState = {
  products: [
      {id: 1, title: 'Kone', description: 'XXXXX', price: '3488.99', image: 'https://i.ebayimg.com/images/g/2tQAAOSwnhldR6hD/s-l640.jpg', amount: 5},
      {id: 2, title: 'Ironhide', description: 'black', price: '3299.99', image: 'https://i.ebayimg.com/images/g/AbEAAOSw2FJc3cCF/s-l1600.jpg', amount: 3},
      {id: 3, title: 'Ironhide Cartridge', description: 'Lock, Tripod Thread', price: '529.99', image: 'https://i.ebayimg.com/images/g/PV8AAOSwX4FdRIac/s-l1600.jpg', amount: 4},
      {id: 4, title: 'Fox + Float', description: 'Manufacturer refurbished', price: '66.00', image: 'https://i.ebayimg.com/images/g/Pr0AAOSwd9ZdMgTG/s-l1600.jpg', amount: 2},
      {id: 5, title: 'Shimano+ Derailuer', description: 'Manufacturer refurbished', price: '67.60', image: 'https://i.ebayimg.com/images/g/Pr0AAOSwd9ZdMgTG/s-l1600.jpg', amount: 2},
      {id: 6, title: 'SANTA CRUZ ', description: 'LED Smart TV. Condition is Manufacturer refurbished', price: '185.50', image: 'https://i.ebayimg.com/images/g/Pr0AAOSwd9ZdMgTG/s-l1600.jpg', amount: 2}
  ]
};
 
const productReducer = (state = initialState, action) => {
 console.log('productReducer.js');
    return state;
};
 
export default productReducer;