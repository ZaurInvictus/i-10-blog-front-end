import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import allPosts from './posts'
import onePost from './post'


export default combineReducers({
    alert,
    auth,
    allPosts,
    onePost,
})