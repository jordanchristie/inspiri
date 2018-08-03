import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <section id="landing-page" style={{ textAlign: "center"}}>
            <h1>Inspiri</h1>
            <p>Collect your inspiration.</p>
            <Link to="/auth/facebook" className="waves-effect waves-light btn-large">
                <i className="fa fa-facebook" style={{marginRight: "10px"}}></i>
                Login With Facebook
            </Link>
            <Link to="/auth/twitter" className="waves-effect waves-light btn-large">
                <i className="fa fa-twitter" style={{marginRight: "10px"}}></i>
                Login With Twitter
            </Link>
            <Link to="/auth/google" className="waves-effect waves-light btn-large">
                <i className="fa fa-google" style={{marginRight: "10px"}}></i>
                Login With Google
            </Link>
        </section>
    )
}

export default LandingPage;