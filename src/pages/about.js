import React from 'react'
import {navigate} from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"

const About = () => (
    <PrimaryLayout>

        
            <h1>More about us here</h1>
            <p>Hello you, how are you?</p>
            <button onClick={()=>navigate("/")}>Navigate to Homepage</button>
       

        </PrimaryLayout>
    
)

export default About;