import styled from 'styled-components'
import { mobile } from '../../responsive'
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 30px;
    text-transform: capitalize;
`
export const Select = styled.select`
    border: none;
    padding: 10px 10px;
    outline: none;
    margin-left: 10px;
    ${mobile({
        padding: '5px 5px',
    })}
`

export const Option = styled.option``
export const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SortedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Name = styled.h5`
    ${mobile({
        display: 'none',
    })}
`