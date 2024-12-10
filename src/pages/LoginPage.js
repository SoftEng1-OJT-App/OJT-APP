import React, { useEffect } from 'react';
import neulogo from '../assets/neu.png';
import neucampus from '../assets/neu.jpg';
import neucropped from '../assets/neu-cropped.jpg';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('loginpage-body');
        return () => {
            document.body.classList.remove('loginpage-body');
        };
    }, []);

    const responseGoogle = async (credentialResponse) => {
        console.log(credentialResponse);

        const { credential } = credentialResponse;

        
        try {
            const response = await fetch('https://localhost:3000/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: credential }),
            });

            const data = await response.json();

            if (data.success) {
                
                if (data.role === 'student') {
                    navigate('/student-dashboard');
                } else if (data.role === 'admin') {
                    navigate('/admin-dashboard');
                }
            } else {
                console.log('Login failed:', data.message);
            }
        } catch (error) {
            console.error('Error verifying Google token:', error);
        }
    };

    return (
        <GoogleOAuthProvider clientId="921036108893-aafhs3cdvdctntbi9v3kfv80cfa0kd7n.apps.googleusercontent.com">
            <div className="login-container">
                <div className="image-leftside">
                    <img src={neucropped} alt="login" />
                </div>
                <div className="login-rightside">
                    <img src={neulogo} alt="neu-logo" />
                    <div className="login-header"><p>Welcome to NEU's OJT App!</p></div>
                    <div className="login-subheader"><p>Please log in using your Institutional Email.</p></div>
                    <div className="google-login">
                        <GoogleLogin
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            redirectUri="http://localhost:3000/auth/callback" // ensure this matches the Google Cloud Console URI
                        />
                    </div>
                </div>    
            </div>
        </GoogleOAuthProvider>
    );
};

export default LoginPage;