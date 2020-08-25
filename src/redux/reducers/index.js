import { combineReducers } from "redux";

import user from './user'
import terminals from './terminals'
import buyers from './buyers'

const rootReducer = combineReducers({
    user,
    terminals,
    buyers
})

export default rootReducer;