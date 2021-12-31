import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Wrapper, Cards, Content } from './style'
function Card({ data }) {
    return (
        <Container>
            <Wrapper background={data.imgUrl}>
                <Cards>
                    <Content>
                        <h2 style={{ color: 'white' }}>{data.title}</h2>
                        <Link
                            style={{
                                textDecoration: 'none',
                                width: '80%',
                            }}
                            to="productList"
                        >
                            <Button
                                style={{
                                    backgroundColor: 'grey',
                                    color: 'white',
                                    width: '100%',
                                }}
                                fullWidth
                            >
                                Shop Now
                            </Button>
                        </Link>
                    </Content>
                </Cards>
            </Wrapper>
        </Container>
    )
}

export default Card
