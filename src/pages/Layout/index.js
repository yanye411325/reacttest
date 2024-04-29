
import {Link, Outlet, useNavigate } from "react-router-dom"
import qs from 'qs'
const Layout = () => {
  const navigate = useNavigate()
  // const state = qs.stringify({name: 'book'})
  /* const handleJump = () => {
    navigate({pathname: '/testlocation'})
  } */

  const objectToPass = { key1: 'value1', key2: 'value2' };
  const serializedObject = qs.stringify(objectToPass);
  return (<div>
    我是layout
  
    <div><Link to={{pathname: '/login/kevin'}}>to login</Link></div>
    <div><Link to={'/product?id=123'}>to product</Link></div>
    <div><Link to={{pathname:'/location', state: objectToPass}}>to testlocation</Link></div>
    {/* <div onClick={() => navigate('/location', {state: {name: 'kevin'}})}>testLocation</div> */}
    <Outlet />
  </div>)
}

export default Layout