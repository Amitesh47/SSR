import { combineReducers } from 'redux'
import userReducers from './usersReducer'
import authReducer from'./authReducer'
import adminsReducer from './adminsReducer'

export default combineReducers({
    users: userReducers,
    auth: authReducer,
    admins: adminsReducer
})