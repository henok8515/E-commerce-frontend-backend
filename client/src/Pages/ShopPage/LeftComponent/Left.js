import { Slider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Container, Wrapper, WrapperRow } from './style';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
                <div className="flex w-full justify-between">
                    <Typography variant="h5">Catagories</Typography>
                    <ArrowDropDownIcon />
                </div>
                <div name="catagories" onChange={handleFilter}>
                    {Data.map((data) => (
                        <div className="flex w-full justify-between">
                            <p>{data.name}</p>
                            <input type="checkbox" />
                        </div>
                    ))}
                </div>
            </Wrapper>
            <Wrapper>
                <div className="flex w-full justify-between">
                    <Typography variant="h5">Size</Typography>
                    <ArrowDropDownIcon />
                </div>
                <div name="size" onChange={handleFilter}>
                    {Size.map((size) => (
                        <div className="flex w-full justify-between">
                            <p>{size}</p>
                            <input type="checkbox" />
                        </div>
                    ))}
                </div>
            </Wrapper>

            <Wrapper>
                <div className="flex w-full justify-between">
                    <Typography variant="h5">Color</Typography>
                    <ArrowDropDownIcon />
                </div>

                <div className="m-0" name="color" onChange={handleFilter}>
                    {Color.map((color) => (
                        <div className="flex w-full justify-between">
                            <p>{color}</p>
                            <input type="checkbox" />
                        </div>
                    ))}
                </div>
            </Wrapper>
            <Wrapper>
                <div className="flex w-full justify-between">
                    <Typography variant="h5">Brand</Typography>
                    <ArrowDropDownIcon />
                </div>
                <div name="brand" onChange={handleFilter}>
                    {Brand.map((brand) => (
                        <div className="flex w-full justify-between">
                            <p>{brand}</p>
                            <input
                                name={brand}
                                type="checkbox"
                                onClick={(e) => console.log(e.target)}
                            />
                        </div>
                    ))}
                </div>
            </Wrapper>
            <Wrapper>
                <Typography
                    style={{
                        marginBottom: '20px'
                    }}
                    variant="h5"
                >
                    Price
                </Typography>
                <div
                    style={{
                        marginBottom: '20px'
                    }}
                >
                    <Typography>
                        Price Range{' '}
                        <span
                            style={{
                                colr: 'red'
                            }}
                        >
                            $100 - $200
                        </span>
                    </Typography>
                </div>

                <Slider onChange={(e) => console.log(e.target.value)} />
            </Wrapper>
        </Container>
    );
}

export default Left;
