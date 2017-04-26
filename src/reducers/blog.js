
const blogs = (state = [], action) => {
  switch (action.type) {
    case 'ALLRES':
      return action.blogs
    default:
      return state
  }
}

export default blogs