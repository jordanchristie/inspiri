import React from 'react';


const LandingPage = () => {
    return (
        <section id="landing-page" style={{ textAlign: "center"}}>
            <h1>Inspiri</h1>
            <h3>Collect your inspiration.</h3>
            <a href="/auth/facebook" className="waves-effect waves-light btn-large">
                <i className="fa fa-facebook" style={{marginRight: "10px"}}></i>
                Login With Facebook
            </a>
            <a href="/auth/twitter" className="waves-effect waves-light btn-large">
                <i className="fa fa-twitter" style={{marginRight: "10px"}}></i>
                Login With Twitter
            </a>
            <a href="/auth/google" className="waves-effect waves-light btn-large">
                <i className="fa fa-google" style={{marginRight: "10px"}}></i>
                Login With Google
            </a>
        </section>
    )
}

export default LandingPage;