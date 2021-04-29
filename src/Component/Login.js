import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from 'react-router';


const firebaseConfig = {
    apiKey: "AIzaSyAo6ORRhxZDeqnZkKQ9-k9Fx3Rsrqv0ysY",
    authDomain: "onlinehelpbd.firebaseapp.com",
    databaseURL: "https://onlinehelpbd.firebaseio.com",
    projectId: "onlinehelpbd",
    storageBucket: "onlinehelpbd.appspot.com",
    messagingSenderId: "814312985632",
    appId: "1:814312985632:web:e987403defde2a86585845",
    measurementId: "G-GWRP6BHM53"
  };


if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);

}


const Login = () => {

let history = useHistory();



const handleSubmitForm = (user) => {
    const userData = {
        registeredData:new Date(),
        imgUrl: user.photoURL,
        name: user.displayName,
        email: user.email,
        isAdmin:false,
        balance:0
    }

   
    fetch('http://localhost:5000/adduser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => {
        sessionStorage.setItem('user', JSON.stringify(data));
         history.push('/deshboard')
         history.push('/')
        
        })

}




  const loginWithFacebook =()=>{
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {

    var user = result.user;
   handleSubmitForm(user)

  }).catch((error) => {
  });
  }


    return (
        <section className="login p-fixed d-flex text-center bg-primary common-img-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="login-card card-block">
                            <form className="md-float-material">
                                <div className="text-center">
                                    <img src="assets/images/logo-black.png" alt="logo" />
                                </div>
                                <h3 className="text-center txt-primary">
                                    Sign In to your account
            </h3>
                                <div className="row">
                                </div>
                                <div className="row">
                                    <div className="col-xs-10 offset-xs-1">
                                        <button onClick={loginWithFacebook} type="button" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN WITH GOOGLE</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;