import { combineReducers } from 'redux'
import CategoryReducer from './category/CategoryReducer';
import UserReducer from './user/UserReducer';

const rootReducer = combineReducers(
   {
        category:CategoryReducer,
        user:UserReducer
    }
);
 

export default rootReducer;
