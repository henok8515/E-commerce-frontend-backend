import React from 'react'
import { Container, Image, Wrapper, Icon, Content } from './productStyle'
function Product({ item }) {
    return (
        <Container>
            <Image src={item.img} alt="" />
            <Wrapper>
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
