import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Container, Input, InputContainer } from './style'
import { SendOutlined } from '@material-ui/icons'

function News() {
    return (
        <Container>
            <Typography variant="h2">News Letter</Typography>
            <Typography variant="h5">Get our new update products</Typography>
            <InputContainer>
                <Input placeholder="Email" />
                <Button style={{ backgroundColor: 'teal' }}>
                    <SendOutlined />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default News
