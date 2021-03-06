import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory } from "react-router-dom";
import logo from '../photos/logo.png'


const firebaseConfig = {
    apiKey: "AIzaSyAXzrQUw6Pc0YVotrY2hnsaxYdqVTlx_Uo",
    authDomain: "online-help-bd.firebaseapp.com",
    projectId: "online-help-bd",
    storageBucket: "online-help-bd.appspot.com",
    messagingSenderId: "184714899899",
    appId: "1:184714899899:web:5a564c573fa6dec0aa149e"
  };


if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);

}


const Login = () => {
    document.title="Login Page | Online Help Bd";

const history= useHistory();

const handleSubmitForm = (user) => {
    const userData = {
        registeredData:new Date(),
        imgUrl: user.photoURL,
        name: user.displayName,
        email: user.email,
        isAdmin:false,
        balance:0
    }

   
    fetch('https://onlinehelpbd.herokuapp.com/adduser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => {
        sessionStorage.setItem('email', data.email);
        history.push("/deshboard")
        
        })

}




  const loginWithGoogle =()=>{
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
                                    <img style={{width:'10%'}} src={logo} alt="logo" />
                                </div>
                                <h3 className="text-center txt-primary">
                                    Sign In to your account
            </h3>
                                <div className="row">
                                </div>
                                <div className="row">
                                    <div className="col-xs-10 offset-xs-1">
                                        <button onClick={loginWithGoogle} type="button" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN WITH GOOGLE</button>
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