import React from 'react'
import {navigate} from "gatsby"
import Header from "../components/Header"

const Test = () => (
    <div>
        <Header title="header of test page - hurtighans.dk"></Header>
        <h2>Test page here</h2>
        <p>Hello you, how are you?</p>
        <button onClick={()=>navigate("/")}>Navigate to Homepage</button>
    </div>
)

export default Test;