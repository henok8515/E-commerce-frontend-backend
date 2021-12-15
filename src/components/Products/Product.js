import React from 'react'
import { Container, Image, Wrapper, Icon, Content } from './productStyle'
function Product({ item }) {
    return (
        <Container background={item.img}>
            <Wrapper>
                <Image alt="" />
                <Content>
                    <Icon>1</Icon>
                    <Icon>2</Icon>
                    <Icon>3</Icon>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Product
