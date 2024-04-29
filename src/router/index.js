
import { createBrowserRouter } from "react-router-dom";
import  StoreTest from '../pages/storeTest/index'
import  Layout from '../pages/Layout/index'
import  Login from '../pages/Login/index'
import  Product from '../pages/Product/index'
import  TestLocation from '../pages/TestLocation/index'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />
  },
  {
    path: '/storeTest',
    element: <StoreTest />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'product',
        element: <Product />
      },
      {
        path: 'location',
        element: <TestLocation />
      }
      
    ]
  },
  
  
])

export default router