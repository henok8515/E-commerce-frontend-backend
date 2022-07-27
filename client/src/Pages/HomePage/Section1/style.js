import styled from 'styled-components';
import img from '../../../Assets/Images/slide-1.jpg';
import { FontColor } from '../../../Config/Color';
export const Container = styled.div`
    top: -70px;

    /* background-image: url(${img}); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const BrandLogo = styled.div`
    margin: 0;
    display: flex;
    width: 100vw;
`;
export const H1 = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-size: 8rem;
    font-weight: 900;
    color: ${FontColor.Title};
`;
export const Button = styled.button`
    border: 1px solid ${FontColor.Title};
    border-radius: none;
    transition: all 1s ease;
    position: relative;
    z-index: 1;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background-color: #272727;
        transform: scaleX(0);
        transform-origin: left;
        transition: all 1s ease;
    }
    &:hover::before {
        transform: scaleX(1);
    }
    &:hover {
    }
`;
