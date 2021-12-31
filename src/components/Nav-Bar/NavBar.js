import { Badge, Button, Typography } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Left, Right } from './style'
function NavBar() {
    return (
        <Container>
            <Left>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Typography variant="h3" gutterBottom component="div">
                        E-com
                    </Typography>
                </Link>
            </Left>
            {/* <Center>
                <Language></Language>
                <TextField
                    placeholder="Search"
                    style={{ textAlign: 'center' }}
                />
            </Center> */}
            <Right>
                <Badge badgeContent={4} color="success">
                    <Link style={{ textDecoration: 'none' }} to="/cart">
                        <ShoppingCartOutlined />
                    </Link>
                </Badge>
                <Link
                    style={{
                        textDecoration: 'none',
                    }}
                    to="/signin"
                >
                    <Button>Sign Out</Button>
                </Link>
            </Right>
        </Container>
    )
}

export default NavBar
