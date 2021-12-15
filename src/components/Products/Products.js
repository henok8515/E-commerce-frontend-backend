import React from 'react'
import { popularProducts } from '../../Data'
import Product from './Product'
import { Container } from './productsStyle'
function Products() {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product key={item.id} item={item} />
            ))}
        </Container>
    )
}

export default Products
