import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image, Wrapper, Icon, Content } from './productStyle'
function Product({ item }) {
    return (
        <Container background={item.img}>
            <Wrapper>
                <Image alt="" />
                <Content>
                    <Link to="/product">
                        <Icon>
                            <ShoppingCartOutlined />
                        </Icon>
                    </Link>
                    <Icon>
                        <SearchOutlined />
                    </Icon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Product
