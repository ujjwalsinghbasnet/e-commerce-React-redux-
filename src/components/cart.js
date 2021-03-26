import '../App.css'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {changeQuantity, removeItemFromCart, numberOfItemsChanged, cartCleared} from '../features/cartSlice'
import { Link } from 'react-router-dom'
import Header from './Header'

function Cart() {
    const state = useSelector(state => state.cart.cartContent)
    const dispatch = useDispatch()
    const totalPrice = state.reduce((prev,cur) => prev + parseInt(cur.price,10),0)

    const clearCart = () => {
        dispatch(cartCleared())
    }
    if(state.length === 0){
        return (
            <>
                <Header showNavigation={false} showHero={false} anotherClass='noImageHero' userInfo={true}/>
                <div className='cart-container'>
                    <div className='nothing'>
                    <h1>Nothing added yet</h1>
                    <div className='cart-btns'>
                        <Link to='/'>
                        <button className='continue_shopping_btn button'>Continue Shopping</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </>
        )
    }
    else{
        let items = ''
        items = state.map(item => <CartItems key = {item.id} title={item.title} thumbnail={item.thumbnail} price={item.price} id={item.id}quantity={item.quantity}/>)
        return (
            <>
                <Header showNavigation={false} showHero={false} anotherClass='noImageHero' userInfo={true}/>
                <div className='cart-container'>
                <div className='cart-items'>{items}</div>
                <div className='remove-cart'><button className='button' onClick={clearCart}>Clear Cart</button></div>
                <div className='total'>
                    <span className='totalAmount'>Total</span>{totalPrice}
                </div>
                <div className='cart-btns'>
                    <Link to='/checkout'>
                    <button className='checkout_btn button' >Checkout</button>
                    </Link>
                    <Link to='/'>
                    <button className='continue_shopping_btn button'>Continue Shopping</button>
                    </Link>
                </div>
                </div>
            </>
        )
    }
}
function CartItems({ title, thumbnail, price, id,quantity}){
    const dispatch = useDispatch()

    const removeCart = e => {
        const id = e.target.parentNode.parentNode.getAttribute('data-id')
        dispatch(removeItemFromCart(Number(id)))
        dispatch(numberOfItemsChanged())
    }
    const addItems = e => {
        const id = Number(e.target.parentNode.parentNode.getAttribute('data-id'))
        let incOrDec = 'inc';
        dispatch(changeQuantity({id,incOrDec}))
    }
    const decreaseItems = e => {
        const id = Number(e.target.parentNode.parentNode.getAttribute('data-id'))
        let incOrDec = 'dec';
        dispatch(changeQuantity({id,incOrDec}))
    }

    return(
        <>
        <div className='cart-list' data-id={id}>
            <img src={`${thumbnail}`} alt='img' />
            <span className='title'>{title}</span>
            <span className='price'>{price}</span>
            <div className = 'quantity'>
                <span className='plus btn' onClick={addItems}>+</span>
                <span className='amount'>{quantity}</span>
                <span className='minus btn' onClick={decreaseItems}>-</span>
            </div>
            <span className='delete' onClick={removeCart}><img src="https://img.icons8.com/carbon-copy/100/000000/delete-forever--v1.png"/></span>
        </div>   
        </>
    )
}

export default Cart
