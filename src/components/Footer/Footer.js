import { Typography } from '@material-ui/core'
import { LocationOnOutlined, Mail, Phone } from '@material-ui/icons'
import React from 'react'
import {
    Container,
    Left,
    Center,
    Right,
    List,
    ListContainer,
    Info,
    InfoContainer,
    Title,
    Bottom,
} from './style'

import News from '../News/News'
function Footer() {
    return (
        <div>
            <Container>
                <Left>
                    <Typography variant="h1">E-com</Typography>
                    <News />
                </Left>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flex: 6,
                        marginTop: '20px',
                    }}
                >
                    <Center>
                        <Typography variant="h5">Community</Typography>
                        <ListContainer>
                            <List>about</List>
                            <List>submit on issue </List>
                            <List>github repo</List>
                            <List>stack</List>
                        </ListContainer>
                    </Center>
                    <Center>
                        <Typography variant="h5">useful Links</Typography>
                        <ListContainer>
                            <List>home</List>
                            <List>men </List>
                            <List>women</List>
                            <List>kids</List>
                            <List>about</List>
                            <List>contact us</List>
                            <List>feed back</List>
                        </ListContainer>
                    </Center>
                    <Right>
                        <Typography
                            style={{ marginBottom: '20px' }}
                            variant="h5"
                        >
                            Contact Us
                        </Typography>
                        <InfoContainer>
                            <Info>
                                <LocationOnOutlined />
                                <Title>adddis abeba ethiopa</Title>
                            </Info>
                            <Info>
                                <Phone />
                                <Title>0943851525</Title>
                            </Info>
                            <Info>
                                <Mail />
                                <Title>henokegeze44@gmail.com</Title>
                            </Info>
                        </InfoContainer>
                    </Right>
                </div>
            </Container>

            <Bottom>
                <Typography
                    style={{
                        paddingTop: '20px',
                    }}
                    variant="h6"
                >
                    © developed by henok egezew
                </Typography>
            </Bottom>
        </div>
    )
}

export default Footer
