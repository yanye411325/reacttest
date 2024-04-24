
import { useEffect, useState } from 'react';
// import Child from './components/Child'
// import Comment from './comment/comment';
import StoreTest from './storeTest/storeTest';

function App() {

  // console.log(Redux)

  const [state, setState] = useState('')
  useEffect(() => {
    // console.log('parent render 了')
    // console.log(0)
    setState('APP')
  }, [])
  

  return (
   
    <div className="App">
      {/* <Child propState='parentProps'></Child> */}
      {state}
      {/* 评论 */}
      {/* <Comment></Comment> */}
      {/* 测试redux */}
      <StoreTest></StoreTest>
    </div>
  );
}

export default App;
