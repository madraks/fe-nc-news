import { Link } from "react-router-dom";


export default function ErrorPageNotFound({returnPath = "/"}) {
  return ( 
    <>
  <h2>Oops.. Page isn't found.</h2>
  <Link to={returnPath}>Let's take you back</Link>
    </>
  )
}