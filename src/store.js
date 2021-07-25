import { createStore, combineReducers } from "redux";
import homePage from './containers/Homepage/reducers';
import userPage from './containers/UserPage/reducer';


const reducers = combineReducers({homePage, userPage});

export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());