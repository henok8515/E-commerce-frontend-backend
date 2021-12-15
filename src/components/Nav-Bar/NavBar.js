import { Badge, Button, TextField, Typography } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Container, Left, Center, Right, Language } from './style'
function NavBar() {
    return (
        <Container>
            <Left>
                {' '}
                <Typography variant="h3" gutterBottom component="div">
                    E-com
                </Typography>
            </Left>
            <Center>
                <Language></Language>
                <TextField
                    placeholder="Search"
                    style={{ textAlign: 'center' }}
                />
            </Center>
            <Right>
                <Badge badgeContent={4} color="success">
                    <ShoppingCartOutlined />
                </Badge>
                <Button>Sign Out</Button>
            </Right>
        </Container>
    )
}

export default NavBar
