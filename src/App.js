
import { useEffect, useState } from 'react';
// import Child from './components/Child'
import Comment from './comment/comment';

function App() {
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
      <Comment></Comment>
    </div>
  );
}

export default App;
