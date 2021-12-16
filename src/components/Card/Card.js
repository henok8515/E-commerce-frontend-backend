import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../../Data'
import { Container, Wrapper, Content, Image } from './style'
function Card() {
    return (
        <Container>
            {Data.map((data) => (
                <Wrapper>
                    <Image background={data.imgUrl} />
                    <Content>
                        <h1>{data.title}</h1>
                        <Link to="productList">
                            <Button
                                style={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                }}
                            >
                                Shop Now
                            </Button>
                        </Link>
                    </Content>
                </Wrapper>
            ))}
        </Container>
    )
}

export default Card
