
const blogs = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'ALLRES':
      return action.blogs
    case 'SEARCHBLOGS':
      return action.searchBlogs
    default:
      return state
  }
}

export default blogs