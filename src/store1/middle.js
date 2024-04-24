
const middle = store => next => action => {
  next(action)
}

export default  middle