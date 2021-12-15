import styled from 'styled-components'

export const Container = styled.div`
    height: 80px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    position: sticky;
    background-color: #e6efed;
    z-index: 2;
    border-bottom: 1px solid black;
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    align-items: center;
`
export const Center = styled.div`
    flex: 1;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
`
export const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 30px;
`
export const Language = styled.span`
    padding-right: 20px;
`
