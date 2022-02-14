import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Container, ImgContainer, InfoContainer, Image } from './style'
import image from './undraw_shopping_app_flsj.svg'
function Slider() {
    return (
        <Container>
            <ImgContainer src={image} />
            <InfoContainer>
                <Typography variant="h2">50 % Discount </Typography>
                <Button
                    style={{
                        backgroundColor: 'lightslategray',
                        marginTop: '20px',
                    }}
                >
                    Shop Now
                </Button>
            </InfoContainer>
        </Container>
    )
}

export default Slider
