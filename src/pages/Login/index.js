import { useParams } from "react-router-dom"

const Login = () => {
  const {user} = useParams()
  console.log(user)
  return (<div>Login page {user}</div>)
}

export default Login