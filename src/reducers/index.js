import { combineReducers } from 'redux'
import blogs from './blogs'
import visibilityFilter from './visibilityFilter'

const blogApp = combineReducers({
  blogs,
  // visibilityFilter
})

export default blogApp/**
 * Created by shiqian on 2017/4/24.
 */
