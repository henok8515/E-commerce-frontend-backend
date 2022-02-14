import styled from 'styled-components'
import { mobile } from '../../responsive'
export const Container = styled.div`
    height: 80px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    position: sticky;
    background-color: white;
    z-index: 2;
    border-bottom: 1px solid black;
    ${mobile({
        height: '50px',
        position: 'sticky',
        top: 0,
        overFlow: 'hidden',
        width: '90%',
    })}
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    align-items: center;
    ${mobile({})}
`
export const Center = styled.div`
    flex: 1;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
`
export const Right = styled.div`
    flex: 0.2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 30px;
    ${mobile({
        display: 'none',
    })}
`
export const Language = styled.span`
    padding-right: 20px;
`
export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const Bar = styled.span`
    cursor: pointer;
    border: 1px solid black;
    width: 40px;
    margin: 5px 10px;
    ${mobile({})}
`
