import { useSearchParams } from "react-router-dom"

const Product = () => {
  const [params] =  useSearchParams()
  console.log(params)
  return (<div>Product page {params.get('id')}</div>)
}

export default Product