import React from "react"
import {Link} from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"


const Home = () => (
  <div classname="site">
    <Header></Header>
    
    <div className="container">
      <h2>Hello world! :) </h2>
      <p>Go to <Link to="/test/">test page here</Link></p>
      <img src="https://cosmosco.dk/wp-content/uploads/2020/03/keviin-cosmos-isoleret.png.webp" width="200" alt="Keviin Cosmos"/>
    </div>

    <Footer></Footer>
 </div>
)

export default Home;