import { Typography } from '@material-ui/core'
import {
    Facebook,
    GitHub,
    Instagram,
    LocationOnOutlined,
    Mail,
    Phone,
    Pinterest,
} from '@material-ui/icons'
import React from 'react'
import {
    Container,
    Left,
    Center,
    Right,
    Icon,
    IconContainer,
    List,
    ListContainer,
    Info,
    InfoContainer,
    Title,
} from './style'
function Footer() {
    return (
        <Container>
            <Left>
                <Typography variant="h4">E-com</Typography>
                <Typography variant="p">
                    Description is the pattern of narrative development that
                    aims to make vivid a place, object, character, or group.
                    Description is one of four rhetorical modes, along with
                    exposition, argumentation, and narration. In practice it
                    would be difficult to write literature that drew on just one
                    of the four basic modes.
                </Typography>
                <IconContainer>
                    <Icon color="#3b5998">
                        <Facebook />
                    </Icon>
                    <Icon color="tomato">
                        <Instagram />{' '}
                    </Icon>
                    <Icon color="wheat">
                        <GitHub />
                    </Icon>
                    <Icon color=" red">
                        <Pinterest />
                    </Icon>
                </IconContainer>
            </Left>
            <Center>
                <Typography variant="h4">useful Links</Typography>
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
                <Typography style={{ marginBottom: '20px' }} variant="h4">
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
        </Container>
    )
}

export default Footer
