import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function IndividualProduct(props) {
    const { name, price, rating,image,slug } = props;
    return (
        <Link to={`/products/${slug}`}>
            <div className='individualproduct'>
                <div className='individualproduct__image'>
                    <img src = {image} alt={name} />
                </div>
                <div className='individualproduct__detail'>
                    <span className='individualproduct__name'>{name}</span>
                    <div className = 'individualproduct__priceandrating'>
                        <span className='individualproduct__price'>Rs. {price}</span>
                        <span className='rating'>{rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default IndividualProduct
