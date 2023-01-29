import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import searcher from "./reducers/cityReducer";
import thunk from "redux-thunk";

const store = createStore(searcher,composeWithDevTools(
    applyMiddleware(thunk)
) );

//EN PRODUCCION-------------------------------------------------------
// const store = createStore(rootReducers,applymiddleware(thunk)
// )

export default store