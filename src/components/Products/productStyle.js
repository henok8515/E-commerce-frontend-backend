import styled from 'styled-components'

export const Container = styled.div`
    height: 300px;
    width: 300px;
    background: url(${(props) => props.background});
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
    justify-content: space-around;
    transition: all 1s ease;
`
export const Image = styled.img``
export const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 3px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`
export const Wrapper = styled.div`
    background-color: rgb(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    margin: 20px 20px;
    border-radius: 20px;
    margin: 0 10px;
    opacity: 0;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    &:hover {
        opacity: 1;
    }
`
