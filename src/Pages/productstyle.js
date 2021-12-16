import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-self: center;
    width: 70vw;
    margin: 20px 20px;
    height: 80vh;
`
export const Image = styled.img``

export const InfoContainer = styled.div`
    margin: 0 20px;
    flex: 1;
    flex-wrap: wrap;
    width: 100px;
`

export const Info = styled.p``
export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 35%;
    align-items: center;
    text-transform: capitalize;
    margin-top: 40px;
`
export const Filter = styled.select`
    outline: none;
`
export const Option = styled.option`
    text-transform: capitalize;
`
export const AddItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`
export const Item = styled.h4`
    background-color: rgb(0, 0, 0, 0.5);
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: blue;
    border-radius: 10px;
`
export const ItemContainer = styled.div`
    display: flex;
    width: 100px;
    justify-content: space-between;
    margin: 20px 20px;
    align-items: center;
`
