import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from 'redux-logger';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import propiedades from "./reducers/propiedadesReducer";
import preguntas from "./reducers/preguntasReducer";


const logger = createLogger(); 

export default createStore(
    combineReducers({
    	propiedades,
        preguntas
    }),
    {},
    applyMiddleware(logger, thunk, promise())
);