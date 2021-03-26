import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { userCreated } from '../features/userSlice.js';
import Header from '../components/Header.js';

function Signup() {
    // firebase.initializeApp(firebaseConfig)
    const [user,setUser] = useState({email: '', password: ''});
    const [redirect,setredirect] = useState(null)
    const  dispatch = useDispatch()

    if(redirect){
        return <Redirect to={redirect}/>
    }
    const changeHandler = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const signInWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
        .then((userCredential) => {
            console.log(userCredential.user.providerData[0])
            dispatch(userCreated(userCredential.user.providerData[0]))
            setredirect('/cart')
        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        })
    }
    const signup = (e) => {
        e.preventDefault();
        const email = user.email;
        const password = user.password;

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;

            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }
    return (
        <>
            <Header showNavigation={false} showHero={false} anotherClass='noImageHero'/>
            <div className='signup form_container'>
            <form className=' signup_form log_form' onSubmit={signup} >
                <input type='text' placeholder='Email' value={user.email} name='email' onChange={changeHandler}/>
                <input type='password' placeholder='password' value={user.password} name='password' onChange={changeHandler}/>
                <input type='submit' value='sign up'/>
                <div className='form_text'>Already have an account? <a href='/signin'>Login</a> instead.</div>
                <span>Or</span>
            </form>
            <button onClick={signInWithGoogle}>Sign in with google</button>
        </div>
        </>
    )
}

export default Signup
