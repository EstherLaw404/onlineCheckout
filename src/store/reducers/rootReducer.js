
import productReducer from './productReducer';
import memberReducer from './memberReducer';
import cartReducer from './cartReducer';
import specialReducer from './specialReducer';
import { combineReducers } from 'redux';
 
const rootReducer = combineReducers({
	member: memberReducer,
    product: productReducer,
    cart: cartReducer,
    special: specialReducer
});
 
export default rootReducer;