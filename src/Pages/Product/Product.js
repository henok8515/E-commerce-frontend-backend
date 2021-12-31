import React from 'react'
import Navbar from '../../components/Nav-Bar/NavBar'
import Footer from '../../components/Footer/Footer'
import {
    Container,
    Image,
    Info,
    InfoContainer,
    FilterContainer,
    Filter,
    Option,
    AddItem,
    Item,
    ItemContainer,
} from './productstyle'
import { Button, Typography } from '@material-ui/core'
const Product = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Image src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                <InfoContainer>
                    <Typography variant="h4">Dinner Dress</Typography>
                    <Info>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas auctor eros et nisi sodales semper a quis
                        massa. Aenean vitae tincidunt quam. Maecenas eu odio sit
                        amet odio elementum porttitor. Vestibulum ligula orci,
                        porttitor sit amet dignissim in, vulputate interdum
                        justo. Aliquam consequat, elit vel luctus bibendum, arcu
                        eros lobortis eros, sed efficitur nulla ipsum sit amet
                        <Option>size</Option> leo. Proin ornare, nisl sit amet
                        semper lobortis, dui odio cursus enim, non sodales dolor
                        nibh vel nibh. Vivamus in placerat mi.
                    </Info>
                    <Typography style={{ fontWeight: '500' }} variant="h3">
                        $ 40
                    </Typography>
                    <FilterContainer>
                        <Typography>Color</Typography>{' '}
                        <Filter>
                            <Option>white</Option>
                            <Option>blue</Option>
                            <Option>red</Option>
                        </Filter>
                        <Typography>Size</Typography>
                        <Filter>
                            <Option>sm</Option>
                            <Option>md</Option>
                            <Option>lg</Option>
                            <Option>xl</Option>
                        </Filter>
                    </FilterContainer>
                    <AddItem>
                        <ItemContainer>
                            <Typography variant="h4">+</Typography>
                            <Item>2</Item>
                            <Typography variant="h4">-</Typography>
                        </ItemContainer>
                        <Button
                            style={{ backgroundColor: 'black', color: 'white' }}
                        >
                            Add Item
                        </Button>
                    </AddItem>
                </InfoContainer>
            </Container>
            <Footer />
        </div>
    )
}

export default Product
