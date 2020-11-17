import React from 'react'
import {navigate} from "gatsby"

const Test = () => (
    <div>
        <h1>Test page here</h1>
        <p>Hello you, how are you?</p>
        <button onClick={()=>navigate("/")}>Navigate to Homepage</button>
    </div>
)

export default Test;