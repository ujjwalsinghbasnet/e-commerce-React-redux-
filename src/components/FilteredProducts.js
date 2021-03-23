import React from 'react'
import { useSelector } from 'react-redux'
import IndividualProduct from './IndividualProduct'

function FilteredProducts(props) {
    const products = useSelector(state => state.product.products)
    const matchUrl = props.match.params.slug
    if(products){
        const filteredarray = products.filter( items => items.category.indexOf(matchUrl) !== -1 ? items : null)
        console.log(filteredarray)
        const items = filteredarray && filteredarray.map( item => <IndividualProduct key={item.id} name={item.name} price={item.price} rating={item.rating} image = {item.image.url} slug = {item.slug}/>)
        return(
            <>
                <h1 className='product__list__header'>{matchUrl.toUpperCase()}</h1>
                <div className='products__list filtered'>
                    {items ? items : <h1>No items</h1>}
                </div>
            </>
        )
    } else {
        return <h1>Loading</h1>
    }
}

export default FilteredProducts
