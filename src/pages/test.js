import React from 'react'
import {navigate} from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Test = () => (
    <div className="site">

        <Header></Header>

        <div className="container">
            <h2>Test page here</h2>
            <p>Hello you, how are you?</p>
            <button onClick={()=>navigate("/")}>Navigate to Homepage</button>
        </div>
        
        <Footer></Footer>
    </div>
    
)

export default Test;