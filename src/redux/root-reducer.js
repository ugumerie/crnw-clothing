import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from './cart/cart.reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: 'root', //at what point do you want our persist to start storing the reducer - at the root level
    storage, // in this case local storage
    whitelist: ['cart'], // a string of reducer state we want to persist
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// })

export default persistReducer(persistConfig, rootReducer);