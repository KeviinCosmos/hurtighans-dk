import React from "react"
import {Link} from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"


const Home = () => (
  <div classname="site">
    <Header></Header>

    <div className="container main">
      <h2>Hello world! :) </h2>
      <p>Go to <Link to="/about/">More about us</Link></p>
      <img src="https://cosmosco.dk/wp-content/uploads/2020/03/keviin-cosmos-isoleret.png.webp" width="200" alt="Keviin Cosmos"/>

        <div className="posts">
          <div className="row justify-content-md-center p-3">
            <div className="col-sm-4"><Post title="This is our first post" excerpt="this is a short excerpt"></Post></div>
            <div className="col-sm-4"><Post title="This is our first post" excerpt="this is a short excerpt"></Post></div>
            <div className="col-sm-4"><Post title="This is our first post" excerpt="this is a short excerpt"></Post></div>
          </div>
          
        </div>
    </div>

    <Footer></Footer>
 </div>
)

export default Home;