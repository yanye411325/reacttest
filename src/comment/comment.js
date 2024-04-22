import './style.scss'
import {useEffect, useState, useRef, useCallback, useMemo} from 'react'
import {formatDate} from '../util/util'
import { orderBy} from 'lodash-es'  // debounce, 
import {v4 as uuid} from 'uuid'
const avatar = require('../static/image/avatar.png')



const list = [
  {
    rpId: uuid(16),
    user: {
      uid: '98723942',
      avatar: 'https://img2.baidu.com/it/u=2470905922,2199430815&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
      name: 'book'
    },
    comment: '评论测试1111',
    time: '2023-10-16 08:15:00',
    like: '888'
  }, {
  rpId: uuid(16),
  user: {
    uid: '23424',
    avatar: 'https://img2.baidu.com/it/u=2470905922,2199430815&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
    name: 'tom'
  },
  comment: '评论测试2222',
  time: '2023-10-18 08:15:00',
  like: '88'
}]
const user = {
  name: 'book',
  uid: '98723942',
  avatar
}
const tabList = [{
  name: '最新',
  value: 'new'
},{
  name: '最热',
  value: 'hot'
},]


const Comment = () => {
  const [type, setType] = useState('new')
  const [val, setVal] = useState('')
  const [commentList, setCommentList] = useState(orderBy(list, 'time', 'desc'))
  const inputRef = useRef(null)

  let fRef = useRef()
  useEffect(() => {
    inputRef.current.focus()
  })

  const handleTab = (val) => {
    setType(val)
    if (val === 'hot') {
      setCommentList(orderBy(commentList, 'like', 'desc'))
    } else {
      setCommentList(orderBy(commentList, 'time', 'desc'))
    }
    
  }
  const debounce = (fn, delay) => {
    let timer = null

    return (...args) => {
      if (timer) clearTimeout(timer)

      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
  const f = () => console.log('执行了',val)
  fRef.current = f
  // const fn = useCallback(debounce(() => fRef.current(), 500)
  //   , []);
    const fn = useMemo(() => debounce(() => fRef.current(), 500)
    , []);
  // const fn = useMemo(() => debounce(() => {console.log(val)}, 1000), [])
  const handleChange = (e) => {
    const eVal = e.target.value
    setVal(eVal)
    fn()
  }
  
  const handlePublish = () => {
    setCommentList([...commentList, {
      rpId: uuid(16),
      user: {
        uid: user.uid,
        avatar: user.avatar,
        name: user.name
      },
      comment: val,
      time: Date.now(),
      like: '9999'
    }])

    setVal('')

    inputRef.current.focus()
  }
  const handleDel = (rpid) => {
    setCommentList(commentList.filter(item => item.rpId !== rpid))
  }

  return (<div className='commentWrap'>
    <div className="titleWrap">
      <p className="title">评论<span className="num">{commentList.length}</span></p>
      <div className="tabWrap">
        {tabList.map(item => (<div
            className={`tabItem ${type === item.value && 'active'}`}
            key={item.value}
            onClick={() => handleTab(item.value)}
            >{item.name}</div>))}
      </div>
    </div>

    <div className="inputWrap">
      <input ref={inputRef} type="text" value={val} onChange={e => handleChange(e)} />
      <button onClick={handlePublish}>发布</button>
    </div>

    <div className="commentList">
      {commentList.map(item => (
          <div className="listItemWrap" key={item.rpId}>
            <div className="user">
              <img src={item?.user?.avatar} alt="" className="avatar" />
              <p className="name">{item?.user?.name}</p>
            </div>
            <p className="comment">{item?.comment}</p>
            <div className="footer">
              <span className="time">{formatDate(item.time, 'MM-DD HH:mm:ss')}</span> 
              <p>
              <span className="like">点赞数<i className="num">{item.like}</i></span>
              {item.user.uid === user.uid && <span className="del" onClick={() => handleDel(item.rpId)}>删除</span>}
              </p>
            </div>
          </div>
        ))}
    </div>

  </div>)
}

export default Comment