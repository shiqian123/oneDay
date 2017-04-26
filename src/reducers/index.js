import { combineReducers } from 'redux'
import blog from './blog'
import visibilityFilter from './visibilityFilter'

const blogApp = combineReducers({
  blog,
  // visibilityFilter
})

export default blogApp/**
 * Created by shiqian on 2017/4/24.
 */
