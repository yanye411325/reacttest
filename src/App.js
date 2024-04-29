
import { useEffect, useState } from 'react';
import StoreTest from './pages/storeTest/index';

function App() {

  const [state, setState] = useState('')
  useEffect(() => {
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
