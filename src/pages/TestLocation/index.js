import { useLocation } from "react-router-dom"

const TestLocation = () => {
const location = useLocation()
console.log('====name', location)
  return (<div>
    Testlocation page ==== narme
  </div>)
}

export default TestLocation