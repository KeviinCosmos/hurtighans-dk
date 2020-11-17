import React from "react"
import {Link} from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import Post from "../components/Post"


export default () => (

  <PrimaryLayout>
    
      <h1>Hello world! :) </h1>
      <p>Go to <Link to="/about/">More about us</Link></p>
      <img src="https://cosmosco.dk/wp-content/uploads/2020/03/keviin-cosmos-isoleret.png.webp" width="200" alt="Keviin Cosmos"/>

        <div className="posts">
          <div className="row justify-content-md-center pt-5 pb-5">
            <div className="col-sm-4"><Post title="This is our first post" excerpt="this is a short excerpt"></Post></div>
            <div className="col-sm-4"><Post title="This is our first post" excerpt="this is a short excerpt"></Post></div>
            <div className="col-sm-4"><Post title="This is our first post" excerpt="this is a short excerpt"></Post></div>
          </div> 
        </div>

  </PrimaryLayout> 
 
)

