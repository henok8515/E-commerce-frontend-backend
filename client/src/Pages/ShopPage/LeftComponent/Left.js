import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Container, Wrapper, WrapperRow } from './style';

const Data = [
    {
        name: 'Furniture',
        quantity: 8
    },
    {
        name: 'Coffee & Tables',
        quantity: 1
    },
    {
        name: 'Lighting',
        quantity: 3
    },
    {
        name: 'Decoretion',
        quantity: 5
    },
    {
        name: 'Electronics',
        quantity: 4
    },
    {
        name: 'Beds',
        quantity: 4
    },
    {
        name: 'ArmChair & Chaises',
        quantity: 5
    },
    {
        name: 'Sofa',
        quantity: 6
    }
];
const Size = ['ExtraSmall', 'Small', 'Medium', 'Large', 'Extra Large'];
const Color = ['red', 'blue', 'black', 'brown', 'yellow', 'grey', 'firebrick'];
const Brand = [
    'Next',
    'River Island',
    'Geox',
    'New Balance',
    'UGG',
    'F&F',
    'Nike'
];
function Left() {
    const [filter, setFilter] = useState({});
    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({ ...filter, [e.target.name]: value });
    };
    console.log(filter);
    return (
        <Container>
            <Wrapper>
                <Typography underline variant="h5">
                    Categorys
                </Typography>
                <select name="catagories" onChange={handleFilter}>
                    {Data.map((data) => (
                        <option>{data.name}</option>
                    ))}
                </select>
            </Wrapper>
            <Wrapper>
                <Typography
                    style={{
                        marginBottom: '10px'
                    }}
                    variant="h5"
                >
                    Size
                </Typography>
                <select name="size" onChange={handleFilter}>
                    {Size.map((size) => (
                        <option>{size}</option>
                    ))}
                </select>
            </Wrapper>

            <WrapperRow>
                <Typography variant="h5">Color</Typography>
                <select name="color" onChange={handleFilter}>
                    {Color.map((color) => (
                        <option>{color}</option>
                    ))}
                </select>
            </WrapperRow>
            <Wrapper>
                <Typography
                    style={{
                        marginBottom: '10px'
                    }}
                    variant="h5"
                >
                    Brand
                </Typography>
                <select name="brand" onChange={handleFilter}>
                    {Brand.map((brand) => (
                        <option>{brand}</option>
                    ))}
                </select>
            </Wrapper>
            <Wrapper>
                {/* <Typography
                    style={{
                        marginBottom: '20px'
                    }}
                    variant="h5"
                >
                    Price
                </Typography> */}
                {/* <div
                    style={{
                        marginBottom: '20px'
                    }}
                > */}
                {/* <Typography>
                            Price Range{' '}
                            <span
                                style={{
                                    colr: 'red'
                                }}
                            >
                                $100 - $200
                            </span>
                        </Typography> */}
                {/* </div>

                <Slider /> */}
            </Wrapper>
        </Container>
    );
}

export default Left;
