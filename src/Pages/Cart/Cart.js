import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/Nav-Bar/NavBar'
import './style.css'
import {
    Container,
    HeaderContainer,
    Left,
    LeftContainer,
    P,
    RightContainer,
    Wrapper,
    Image,
    PriceContainer,
    Span,
    Summery,
} from './style'

const Cart = () => {
    return (
        <div>
            <NavBar />
            <Container>
                <Typography style={{ textAlign: 'center' }} variant="h4">
                    Your Bag
                </Typography>
                <HeaderContainer>
                    <Link to="/">
                        <Button style={{ backgroundColor: 'wheat' }}>
                            continue Shoping
                        </Button>
                    </Link>

                    <h4>Shopping bag</h4>
                    <h4>your wish List</h4>
                    <Button
                        style={{ backgroundColor: 'black', color: 'white' }}
                    >
                        CheckOut
                    </Button>
                </HeaderContainer>
                <Wrapper>
                    <div style={{ flex: 7 }}>
                        <LeftContainer>
                            <div style={{ display: 'flex' }}>
                                <Image
                                    src="https://www.transparentpng.com/thumb/shirt/t0nf0S-t-shirt-transparent-background.png"
                                    alt="t shirt transparent background @transparentpng.com"
                                />
                                <Left>
                                    <P>
                                        id:<Span>T- shirt</Span>
                                    </P>
                                    <P>
                                        id:
                                        <Span>3846389920832</Span>
                                    </P>{' '}
                                    <P>
                                        size:<Span>md</Span>
                                    </P>
                                </Left>
                            </div>
                            <PriceContainer>
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '80px',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography variant="h4">+</Typography>{' '}
                                    <Typography variant="h4">2</Typography>
                                    <Typography variant="h4">-</Typography>{' '}
                                </div>
                                <div>
                                    <Typography variant="h3">$ 40</Typography>
                                </div>
                            </PriceContainer>
                        </LeftContainer>
                        <hr />
                        <LeftContainer>
                            <div style={{ display: 'flex' }}>
                                <Image src="https://png.pngitem.com/pimgs/s/502-5029947_nike-basketball-shoes-png-transparent-png.png" />
                                <Left>
                                    <P>
                                        id<Span>123</Span>
                                    </P>
                                    <P>
                                        id
                                        <Span>123</Span>
                                    </P>{' '}
                                    <P>
                                        id<Span>123</Span>
                                    </P>
                                </Left>
                            </div>
                            <PriceContainer>
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '80px',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography variant="h4">+</Typography>{' '}
                                    <Typography variant="h4">2</Typography>
                                    <Typography variant="h4">-</Typography>{' '}
                                </div>
                                <div>
                                    <Typography variant="h3">$ 40</Typography>
                                </div>
                            </PriceContainer>
                        </LeftContainer>
                    </div>
                    <RightContainer>
                        <Typography>Order Summery</Typography>
                        <Summery>
                            <P>subtotal</P>
                            <P>$80</P>
                        </Summery>
                        <Summery>
                            <P>subtotal</P>
                            <P>$80</P>
                        </Summery>
                        <Summery>
                            <P>subtotal</P>
                            <P>$80</P>
                        </Summery>
                        <Summery>
                            <P>subtotal</P>
                            <P>$80</P>
                        </Summery>
                        <Link to="/payment">
                            <Button
                                fullWidth
                                style={{
                                    backgroundColor: 'blue',
                                    color: 'white',
                                }}
                            >
                                CheckOut Now
                            </Button>
                        </Link>
                    </RightContainer>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Cart
