import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import firebase from 'firebase/app'
import { Redirect } from 'react-router'
import { userLoggedout } from '../features/userSlice'
import avatar from '../images/avatar.png'
import { cartCleared } from '../features/cartSlice'

function Profile() {
    const user = useSelector(state => state.user.user)
    const [redirect,setredirect] = useState(null)
    const dispatch = useDispatch()

    if(redirect){
        return <Redirect to={redirect} />
    }

    const logout = () => {
        firebase.auth().signOut().then(() => {
            dispatch(userLoggedout());
            localStorage.removeItem('cart');
            dispatch(cartCleared())
            setredirect('/')
          }).catch((error) => {
            // An error happened.
            console.log(error);
            alert('Something went wrong.')
          });
    }
    return (
       <>
        <Header showNavigation={false} showHero={false} anotherClass='noImageHero'/>
        <div className='profile_container'>
                <div className='profile_image'>
                    <img src = {user.photoURL || avatar} alt='profile image'/>
                </div>
                <div className='profile_details'>
                    <h2 className='display_name'>{user.displayName || 'No name'}</h2>
                </div>
                <span className='logout' onClick={logout}>Logout</span>
            </div>
       </>
    )
}

export default Profile
