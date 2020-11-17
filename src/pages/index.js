import React from "react"
import {Link} from "gatsby"



const Home = () => (
  <div>
    <h1>Hello world! :) </h1>
    <p>Go to <Link to="/test/">test page here</Link></p>
    <img src="https://cosmosco.dk/wp-content/uploads/2020/03/keviin-cosmos-isoleret.png.webp" width="200" alt="Keviin Cosmos"/>
 </div>
)

export default Home;