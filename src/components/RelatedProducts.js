import React from 'react'
import { useSelector } from 'react-redux'

function RelatedProducts() {
    const products = useSelector(state => state.product.products)

    const arrays = products.some(item => item.category.indexOf(''))
    return (
        <div>
            
        </div>
    )
}

export default RelatedProducts
