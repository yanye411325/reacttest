/* import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import {increment, decrement, addToNumber} from '../store/modules/counterStore'
import { fetchChannelList } from "../store/modules/channelListStore"
 */

import { connect } from "react-redux"


const StoreTest = ({count, increment}) => {
  console.log('props===>', count);

  /* const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])
  const {count} = useSelector(store => store.count)
  const {channelList} = useSelector(store => store.channel)
  console.log('res', count); */
  return (
    <div>
      {/* <button id="decrement" onClick={() => {dispatch(decrement())}}>-</button> */}
      <div>{count}</div>
      <button id="increment" onClick={increment}>+</button>
      {/* <button id="increment" onClick={() => {dispatch(addToNumber(10))}}>+10</button> */}
      <ul>
      {/* {channelList.map(item => (<li key={item}>{item}</li>))} */}
      </ul>
    </div>
  )
}
const mapStateToProps = state => ({
  count: state.count.count
})

const mapActionsToProps = dispatch => ({
    increment() {
      dispatch({type: 'increment'})
    }
})
export default connect(mapStateToProps, mapActionsToProps)(StoreTest)