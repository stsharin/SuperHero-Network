import React from 'react';
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.error(errorMessage);
            });

    }
    return (
        <div>
            <div className="text-center m-5">
                <h3><strong>Login With</strong></h3>
                <button onClick={handleGoogleSignIn} className="btn btn-primary">Continue with Google</button>
                <p>Don't have an account? <a href="/login">Create an account</a></p>
            </div>
        </div>
    );
};

export default Login;