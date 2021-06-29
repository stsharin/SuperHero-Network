import React, { useState } from 'react';
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState("");

    let { from } = location.state || { from: { pathname: '/' } }

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;  // console.log(user);
                const loggedInUser = { name: user.displayName, email: user.email, img: user.photoURL };  // console.log(loggedInUser);
                localStorage.setItem("user", JSON.stringify(loggedInUser));
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center shadow m-5">
                <div className="text-center m-5">
                    <h3><strong>Login With</strong></h3>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Continue with Google</button>
                    <p>Don't have an account? <a href="/login">Create an account</a></p>
                    <p>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;