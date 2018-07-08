import React from 'react';

const LandingPage = () => {
    return (
        <div style={{ textAlign: "center"}}>
            <h1>Inspiri</h1>
            <p>Collect your inspiration.</p>
            <a class="waves-effect waves-light btn-large">
                <i class="fa fa-facebook" style={{marginRight: "10px"}}></i>
                Login With Facebook
            </a>
            <a class="waves-effect waves-light btn-large">
                <i class="fa fa-twitter" style={{marginRight: "10px"}}></i>
                Login With Twitter
            </a>
            <a class="waves-effect waves-light btn-large">
                <i class="fa fa-google" style={{marginRight: "10px"}}></i>
                Login With Google
            </a>
        </div>
    )
}

export default LandingPage;