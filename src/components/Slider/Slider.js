import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Container, ImgContainer, InfoContainer, Image } from './style'
import image from './PngItem_831128.png'
function Slider() {
    return (
        <Container>
            <ImgContainer>
                <Image src={image} />
            </ImgContainer>
            <InfoContainer>
                <Typography variant="h2">Summer Sale</Typography>
                <Typography variant="h6">
                    Don't compormise on style! get flat 30% off for new arrivals
                </Typography>
                <Button style={{ backgroundColor: 'black', color: 'white' }}>
                    Shop Now
                </Button>
            </InfoContainer>
        </Container>
    )
}

export default Slider
