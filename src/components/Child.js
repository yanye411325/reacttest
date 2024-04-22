
import {useEffect, useState} from 'react'


const Child = (props) => {
  const {propState} = props
  const [val, setVal] = useState('')
  
  useEffect(() => {
    // console.log('child')
    console.log('child render 了')
    console.log(111)
  }, [val])
  const handleClick = (event, obj) => {
    setVal('aaaChild')
    console.log(event.target.innerHTML)
    console.log(obj.aaa)
  }

  return (
    <div>
      {propState} ==={val}
      <button onClick={(event) => handleClick(event, {aaa: 'funParams'})}>cccccc</button>
    </div>
  )
}

export default Child