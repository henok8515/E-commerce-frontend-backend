import React from 'react'
import { Data } from '../../Data'
import Card from './Card'
import {
    Container,
    BottomContaier,
    BottomLeft,
    BottomRight,
    Buttons,
    Title,
    CardContainer,
} from './cardListStyle'
function CardList() {
    return (
        <Container>
            <Title>treding products</Title>s
            <CardContainer>
                {Data.map((data) => (
                    <Card key={data.id} data={data} />
                ))}
            </CardContainer>
            <BottomContaier>
                <BottomLeft>
                    <Buttons>Shop Now</Buttons>
                </BottomLeft>
                <BottomRight>
                    <Buttons>Shop Now</Buttons>
                </BottomRight>
            </BottomContaier>
        </Container>
    )
}

export default CardList
