import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`
export const Wrapper = styled.div`
    height: 70vh;
    flex: 1;
    background-color: wheat;
    margin: 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    object-fit: cover;
    border-radius: 20px;
    opacity: 1;
    background-size: cover;
`
export const Image = styled.img`
    border-radius: 20px 20px 0 0;
    height: 100%;
    width: 100%;
    background: url(${(props) => props.background});
    object-fit: cover;
    background-size: cover;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
