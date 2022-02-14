import styled from 'styled-components'
import { mobile } from '../../responsive'
export const Container = styled.div`
    display: flex;

    flex: 1;
    height: 70vh;
    margin-bottom: 40px;
    justify-content: center;
    position: relative;
`
export const Wrapper = styled.div`
    height: 60vh;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-size: cover;
    background: url(${(props) => props.background});
    background-size: cover;
    transition: all 1s ease;
    &:hover {
        transform: scale(1.1);
    }
    ${mobile({
        display: 'flex',
        flexWrap: 'wrap',
    })}
`
export const Image = styled.img`
    border-radius: 20px 20px 0 0;
    height: 100%;
    width: 100%;

    object-fit: cover;
    background-size: cover;
`
export const Content = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    opacity: 0;
    transition: all 1s ease;
    /* &:hover {
        opacity: 1;
        border-radius: 20px;
        background-color: rgb(0, 0, 0, 0.8);
        cursor: pointer;
    } */
`
export const Cards = styled.div`
    height: 100%;
    width: 100%;
    margin: 40px 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    align-items: center;
`
