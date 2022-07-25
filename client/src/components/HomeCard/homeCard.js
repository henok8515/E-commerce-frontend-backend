import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const AddButton = styled(Button)`
    background-color: black;
    display: none;
    opacity: 0;
`;
const Container = styled.div`
    transition: all 1s ease-in-out;
    &:hover #child {
        opacity: 1;
    }
`;
function HomeCard(props) {
    return (
        <Container
            className="m-4 flex flex-col justify-between"
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',
                transition: 'all 1s ease',
                height: '377px',
                width: '277px'
                // padding: '20px'
            }}
        >
            <div className="flex justify-between">
                <div className="p-5 ">
                    <p className="bg-[#a6c76c] text-white text-center mb-2  w-10">
                        New
                    </p>

                    <p className="bg-[#ef837b] text-white text-center w-10">
                        Sale
                    </p>
                </div>
                <div
                    id="child"
                    className="m-4 opacity-0  h active:bg-red-500 focus:bg-red-500 focus:ring focus:ring-violet-300  flex justify-center items-center rounded-full h-10 w-10  bg-green-50"
                >
                    <FavoriteBorderIcon />
                </div>
            </div>
            <div>
                <AddButton
                    style={{
                        backgroundColor: '#ebf2fa'
                    }}
                    id="child"
                    fullWidth
                >
                    Add To Cart
                </AddButton>
            </div>
        </Container>
    );
}

export default HomeCard;
