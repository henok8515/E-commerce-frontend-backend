import { Typography } from '@material-ui/core'
import React from 'react'
import NavBar from '../components/Nav-Bar/NavBar'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'
import {
    Container,
    Select,
    Option,
    SortedContainer,
    FilterContainer,
} from './ProductListStyle'

function ProductList() {
    return (
        <div>
            <NavBar />
            <Container>
                <FilterContainer>
                    <Typography>filter product :</Typography>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Grey</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            size
                        </Option>
                        <Option>lg</Option>
                        <Option>md</Option>
                        <Option>sm</Option>
                    </Select>
                </FilterContainer>
                <SortedContainer>
                    <Typography>sorted by :</Typography>
                    <Select>
                        <Option disabled selected>
                            Newst
                        </Option>
                        <Option>Price</Option>
                        <Option>date</Option>
                    </Select>
                </SortedContainer>
            </Container>
            <Products />
            <Footer />
        </div>
    )
}

export default ProductList
