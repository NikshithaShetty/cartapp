import { createStore ,applyMiddleware, compose} from "redux";
import rootred from "./reducers/main";
import thunk from "redux-thunk";
import { persistStore, persistReducer} from "redux-persist";
import  storage  from "redux-persist/lib/storage";

const persistConfig={
key :"persistkey",
storage
}
const persistedReducer = persistReducer(persistConfig,rootred)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    persistedReducer,  composeEnhancers( applyMiddleware(thunk))
);
const persistor= persistStore(store)
export default store;
export {persistor}