import { createStore, combineReducers } from 'redux';
import DataReducer from './DataReducer';
// import ProductReducer from './ProductReducer/productReducer';
// import productReducer from './ProductReducer/productReducer';
const RootReducer = combineReducers({
    // reducer
    menu: DataReducer,
    // productReducer,
})

export const store = createStore(RootReducer)