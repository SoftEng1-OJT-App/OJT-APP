import React from 'react';
import neulogo from './images/neu.png';
import neuOJT from './images/image-side-photo.jpg'
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import './loginpage.css';

const loginpage = () => {
    const responseGoogle = (credentialResponse) => {
        console.log(credentialResponse);
        // handle login success or failure here
    };

    return (
        <GoogleOAuthProvider clientId="google_client-id"> {/* replace with google client ID */}
            <div class="container">
                <div class="image-leftside">
                    <img src={neuOJT} alt="login" />
                </div>
                <div class="login-rightside">
                    <img src={neulogo} alt="neu-logo"></img>
                    <h1>Welcome to NEU's OJT App!</h1>
                    <p>Please log in using your Institutional Email.</p>
                    <div class="google-login">
                        <GoogleLogin
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default loginpage;