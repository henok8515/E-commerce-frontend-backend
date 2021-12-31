import styled from 'styled-components'
import { mobile } from '../../responsive'
export const Container = styled.div`
    margin-top: 20px;
    height: 100vh;
    width: 100%;
    display: flex;
    text-align: start;
    align-items: center;
    justify-content: center;
    align-items: center;
    ${mobile({
        display: 'none',
    })}
`
export const ImgContainer = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100%;

    border-radius: 50%;
    background-color: lightblue;
`
export const InfoContainer = styled.div`
    flex: 1;
    margin-left: 40px;
    border-radius: 50%;
    background-color: lightgreen;
    display: flex;
    height: 100%;
    align-self: center;
    flex-direction: column;
    justify-content: center;

    align-items: center;
`
export const Image = styled.img`
    background-size: cover;
    height: 80%;
    width: 80%;
`
