import React, { useState } from 'react'
import { auth } from './firebase';
import firebase from 'firebase/app'
import { useDispatch } from 'react-redux';
import { userCreated } from '../features/userSlice';
import { Redirect } from 'react-router';
import Header from '../components/Header';


function Signin() {
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
    const signin = (e) => {
        const email = user.email;
        const password = user.password;

        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            dispatch(userCreated(user.providerData[0]))
            setredirect('/cart')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log({errorCode,errorMessage})
        });
    }
    return (
        <>
            <Header showNavigation={false} showHero={false} anotherClass='noImageHero'/>
            <div className='form_header'>Please Login first!</div>
            <div className=' signin form_container'>
                <form className='log_form signin_form' onSubmit={signin} >
                    <input type='text' placeholder='Email' value={user.email} name='email' onChange={changeHandler}/>
                    <input type='password' placeholder='password' value={user.password} name='password' onChange={changeHandler}/>
                    <input type='submit' value='sign in'/>
                    <div className='form_text'>Don't have an account? <a href='/signup'>Signup</a> instead.</div>
                    <span>Or</span>
                </form>
                <button onClick={signInWithGoogle}>Sign in with google</button>
            </div>
        </>
    )
}

export default Signin
