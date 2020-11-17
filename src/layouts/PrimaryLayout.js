import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"


const PrimaryLayout = (props) => (
    <div classname="site">
    <Header />
    <div className="container main">  

        <div className={props.column}>
            {props.children}
        </div>

    </div>
    <Footer />
 </div> 
)

export default PrimaryLayout;

