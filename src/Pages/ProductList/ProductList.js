import { Typography } from '@material-ui/core'
import React from 'react'
import NavBar from '../../components/Nav-Bar/NavBar'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'
import {
    Container,
    Select,
    Option,
    SortedContainer,
    FilterContainer,
    Name,
} from './ProductListStyle'

function ProductList() {
    return (
        <div>
            <NavBar />
            <Container>
                <FilterContainer>
                    <Name>filter product :</Name>
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
                    <Name>sorted by :</Name>
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
