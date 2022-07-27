import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    /* justify-content: center; */
    text-align: start;
    border-color: black;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
export const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 10px 10px;
`;
export const P = styled.p`
    margin: 2px;
    padding: 2px;
`;
export const Input = styled.input`
    margin-right: 20px;
`;
export const ColorContainer = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;
export const WrapperRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 10px 20px;
    color: f;
`;
