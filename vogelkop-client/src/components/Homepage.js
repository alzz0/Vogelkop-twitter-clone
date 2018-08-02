import  React from "react";
import {Link} from "react-router-dom"


const Homepage=()=>{
    return(
    <div className="home-hero">
        <h1>Whats going on?</h1>
        <h4>Are you new here?</h4>
        <Link to="/signup" className="btn btn-primary">
        Sign up here
        </Link>
    </div>
)
    }

export default Homepage;