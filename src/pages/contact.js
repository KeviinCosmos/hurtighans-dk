import React from 'react'
import {navigate} from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Conact = () => (
    <div className="site">

        <Header></Header>

        <div className="container main">
            <h2>Contact us today</h2>
            <p>Let's grab a coffee?</p>
            <button onClick={()=>navigate("/")}>Navigate to Homepage</button>
        </div>

        <Footer></Footer>
    </div>
    
)

export default Conact;