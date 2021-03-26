import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Header from './Header';

function CheckoutProducts(props) {
    const state = useSelector(state => state.cart.cartContent)
    const totalPrice = state.reduce((prev,cur) => prev + parseInt(cur.price,10),0)
    const price = parseInt(props.match.params.slug,10);

    const [showModal, setshowModal] = useState(false)
    const checkout = (e) => {
        e.preventDefault();

        const billingDetails = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            state: e.target.state.value,
            zip: e.target.zip.value,
            card: e.target.card.value,
        }
        if(billingDetails.name==='' || billingDetails.address==='' || billingDetails.state==='' || billingDetails.zip==='' ||billingDetails.card===''){
            alert('Please fill up all fields')
        } else {
            setshowModal(true)
        }
    }
    return (
        <div>
            <Header showNavigation={false} showHero={false} anotherClass='noImageHero'/>
            <h1 className='checkout_h1'>Billing Information</h1>
            <form className='checkout_form' onSubmit={checkout}>
                <div className='input_group'>
                    <label htmlFor='#name'>Name:</label>
                    <input autoComplete='off' name='name' id='name' type='text' placeholder='John Doe'/>
                </div>
                <div className='input_group'>
                    <label htmlFor='#email'>Email:</label>
                    <input autoComplete='off' name='email' id='email' type='email' placeholder='johndoe@gmail.com'/>
                </div>
                <div className='input_group'>
                    <label htmlFor='#address'>Address:</label>
                    <input autoComplete='off' name='address' id='address' type='text' placeholder='Banasthali-16, Dhungedhara'/>
                </div>
                <div className='input_group'>
                    <label htmlFor='#city'>City:</label>
                    <input autoComplete='off' name='city' id='city' type='text' placeholder='Kathmandu'/>
                </div>
                <div className='input_group'>
                    <label htmlFor='#state'>State:</label>
                    <input autoComplete='off' name='state' id='state' type='text' placeholder='Bagmati'/>
                </div>
                <div className='input_group'>
                    <label htmlFor='#zip'>Zip:</label>
                    <input autoComplete='off' name='zip' id='zip' type='text' placeholder='44600'/>
                </div>
                <div className='input_group'>
                    <label htmlFor='#card'>Card:</label>
                    <input autoComplete='off' id='card' name='card' placeholder='4242 4242 4242 4242' type='number' aria-controls='disabled'/>
                </div>  
                <button type='submit' className='payment_button'>Pay Rs. {price||totalPrice}</button>
            </form>
            {showModal?<Modal/>:''}
        </div>
    )
}

const Modal = () => {
    const [loading, setLoading] = useState(true)
    setTimeout(()=>{
        setLoading(false)
    },2000)
    return(
        <div className='checkout_modal_container'>
            <div className='checkout_modal'>
                <h1 className='checkout_modal_title'>{loading?'processing...':'Your order has been placed!'}</h1>
                <Link to='/' className='button'>Continue Shopping</Link>
            </div>
        </div>
    )
}

export default CheckoutProducts
