import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`
export const Left = styled.div`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
    margin: 10px 40px;
    display: flex;
    flex-direction: column;
`
export const Center = styled.div`
    flex: 1;
    margin: 10px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
`
export const Right = styled.div`
    flex: 1;
    margin: 10px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin: 10px 10px;
    font-size: 20px;
    list-style-type: none;
    cursor: pointer;
`
export const ListContainer = styled.div``
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
    margin-left: 10px;
`
