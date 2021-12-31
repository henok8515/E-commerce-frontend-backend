import styled from 'styled-components'
import { mobile } from '../../responsive'
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
export const Title = styled.div`
    text-align: center;
    font-family: 'Comfortaa', cursive;
    text-transform: capitalize;
    font-size: 2em;
    text-decoration: underline;
    letter-spacing: 6px;
    ${mobile({
        fontSize: '1em',
        letterSpacing: '2px',
    })}
`
