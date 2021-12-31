import React from 'react'
import { popularProducts } from '../../Data'
import Product from './Product'
import { Container, Title } from './productsStyle'
function Products() {
    return (
        <Title>
            <h1>your collection</h1>
            <Container>
                {popularProducts.map((item) => (
                    <Product key={item.id} item={item} />
                ))}
            </Container>
        </Title>
    )
}

export default Products
