import { Typography } from '@mui/material';
import React from 'react';
import Center from './Center/Center';
import Left from './LeftComponent/Left';
import Right from './RightContainer/Right';
import { Container, TopContainer, Wrapper } from './style';
function Shop({ setCartItem, cartItem }) {
    return (
        <Container>
            <TopContainer>
                <Typography variant="h4">List</Typography>
                <Typography color="brown" variant="h6">
                    Shop
                </Typography>
            </TopContainer>
            <Wrapper>
                <Left />
                <Right setCartItem={setCartItem} cartItem={cartItem} />
            </Wrapper>
        </Container>
    );
}

export default Shop;
