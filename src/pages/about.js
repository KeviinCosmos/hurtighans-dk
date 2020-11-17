import React from 'react'
import {navigate} from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const About = () => (
    <div className="site">

        <Header></Header>

        <div className="container main">
            <h2>More about us here</h2>
            <p>Hello you, how are you?</p>
            <button onClick={()=>navigate("/")}>Navigate to Homepage</button>
        </div>

        <Footer></Footer>
    </div>
    
)

export default About;