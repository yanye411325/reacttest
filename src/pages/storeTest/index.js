import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {decrement, increment, addToNum} from '../../store/modules/counterStore'
import { asyncSetChannelList } from "../../store/modules/channelListStore"
const StoreTest = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetChannelList(dispatch))
  }, [dispatch])
  
  const {count} = useSelector(store => store.counter)
  const {channelList} = useSelector(state => state.channelList)
// const url = 'https://api.thepaper.cn/userservice/user/web/getLoginStatus'
 
  return (
    <div>
      <div id="decrement" onClick={() =>{dispatch(decrement())}}>-</div>
      <div>{count}</div>
      <div id="increment" onClick={() =>{dispatch(increment())}}>+</div>
      <div id="addToNum" onClick={() =>{dispatch(addToNum(20))}}>+20</div>
      {/* <button id="decrement" onClick={() => {dispatch(decrement())}}>-</button> */}
      {/* <div>{count}</div> */}
      {/* <button id="increment" onClick={increment}>+</button> */}
      {/* <button id="increment" onClick={() => {dispatch(addToNumber(10))}}>+10</button> */}
      <ul>
      {channelList.map(item => (<li key={item}>{item}</li>))}
      </ul>
    </div>
  )
}

export default  StoreTest