import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IndividualProduct from './IndividualProduct'
import { Redirect } from 'react-router-dom'
import { searchedProducts } from '../features/productsSlice'

function Search() {
    const [state, setstate] = useState('')
    const [redirect, setredirect] = useState(null)
    const dispatch = useDispatch()

    const products = useSelector(state => state.product.products)
    const handleChange = (e) => {
        setstate(e.target.value)
    }
    if (redirect) {
        return <Redirect to={redirect} />
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        const search = products.map(product => product.searchTags.indexOf(state) !==-1? product : null).filter(product => product!==null)
        // const items = search && search.map( item => <IndividualProduct key={item.id} name={item.name} price={item.price} rating={item.rating} image = {item.image.url} slug = {item.slug}/>)
        console.log(search)
        dispatch(searchedProducts(search))
        setredirect('/search')
        
    }
    return (
        <div className='searchBox'>
            <form className='searchBox_from' onSubmit={handleSubmit}>
                <input className='searchInput' onChange={handleChange} placeholder='search products'/>
            </form>
        </div>
    )
}

export default Search
