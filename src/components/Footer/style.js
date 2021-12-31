import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    border-top: 5px solid teal;
    justify-content: space-around;
    display: none;
`
export const Left = styled.div`
    justify-content: center;
    align-items: center;
    height: 50vh;
    margin: 10px 40px;
    display: flex;
    flex: 4;
    flex-direction: column;
`
export const Center = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    text-transform: capitalize;
`
export const Right = styled.div`
    display: flex;

    flex-direction: column;
`
export const IconContainer = styled.div`
    display: flex;
    align-items: center;
`
export const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
`
export const List = styled.li`
    text-align: start;
    font-size: 20px;
    list-style-type: none;
    margin-top: 10px;
    cursor: pointer;
    transition: all 1s ease;
    &:hover {
        transform: scale(1.1);
        color: grey;
    }
`
export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Info = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.h3`
    font-weight: 200;
    margin-left: 20px;
`
export const Bottom = styled.div`
    height: 70px;
    background-color: teal;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    overflow: hidden;
    display: none;
`
