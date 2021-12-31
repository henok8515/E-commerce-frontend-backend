import styled from 'styled-components'
import { mobile } from '../../responsive'
export const Container = styled.div``
export const BottomContaier = styled.div`
    display: flex;
    justify-content: space-around;
    height: 70vh;
    ${mobile({
        display: 'flex',
        flexDirection: 'column',
    })}
`
export const BottomLeft = styled.div`
    flex: 1;
    border-radius: 20px;
    margin: 20px 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-image: url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
    background-size: cover;
`
export const BottomRight = styled.div`
    border-radius: 20px;
    display: flex;
    margin: 20px 20px;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-image: url('https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
    background-size: cover;
    &:hover {
        background-color: rgb(0, 0, 0, 0.2);
    }
`
export const Buttons = styled.button`
    padding: 10px 20px;
    opacity: 0;
    border: none;
    cursor: pointer;
    background-color: blue;
    transition: all 1s ease;
    &:hover {
        opacity: 1;
    }
`
export const Title = styled.h1`
    text-align: center;
    font-family: 'Comfortaa', cursive;
    text-transform: capitalize;
    text-decoration: underline;
    font-size: 3em;
`
export const CardContainer = styled.div`
    display: flex;
    ${mobile({
        display: 'flex',
        flexDirection: 'column',
    })}
`
