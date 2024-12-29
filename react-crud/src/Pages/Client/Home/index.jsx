import React from 'react'
import "../Home/index.css"
import {Helmet} from "react-helmet-async"
const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
      <div><h1>Welcome Home Page!</h1></div>
    </>
  
  )
}

export default Home