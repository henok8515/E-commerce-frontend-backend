import { Button, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
let Data = [1, 2, 3, 4];
const Circle = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;
function Product() {
    const [size, setSize] = React.useState('');
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
        setSize(event.target.value);
    };

    return (
        <div className="h-screen overflow-hidden mt-11">
            <div>
                <div>nav</div>
            </div>
            <div className="w-screen justify-center flex h-3/5 ">
                <div className="flex flex-col h-full">
                    {Data.map((item) => (
                        <div
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
                                backgroundSize: 'cover'
                            }}
                            className="flex-1 w-32 h-1/4 m-2"
                        ></div>
                    ))}
                </div>
                <div
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
                        backgroundSize: 'cover'
                    }}
                    className="h-full w-1/3 "
                >
                    2
                </div>
                <div className="w-1/2 flex flex-col h-full ml-6 justify-between">
                    <Typography variant="h4">
                        Dark yellow lace cut out swing dress
                    </Typography>
                    <div>review</div>
                    <Typography color="coral" variant="h4">
                        $76.00–$95.00
                    </Typography>
                    <Typography>
                        Pellentesque aliquet nibh nec urna. In nisi neque,
                        aliquet vel, dapibus id, mattis vel, nisi
                    </Typography>
                    <div className="flex items-center w-1/4  ">
                        <Typography>Color :</Typography>
                        <div className="flex ml-8 w-1/2 justify-between ">
                            <Circle color="green" />
                            <Circle color="yellow" />
                            <Circle color="red" />
                        </div>{' '}
                    </div>
                    <div className="flex  w-1/ items-center  ">
                        <Typography>Size</Typography>
                        <div className="w-full ml-10">
                            <FormControl
                                sx={{ m: 1, minWidth: 120 }}
                                size="small"
                            >
                                <InputLabel id="demo-select-small">
                                    Age
                                </InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={size}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="flex items-center">
                        Quantity
                        <div
                            className="flex items-center  border-2 ml-4 border-black border-solid
                     h-12"
                        >
                            <Button onClick={() => setValue(value - 1)}>
                                -
                            </Button>{' '}
                            {value}{' '}
                            <Button onClick={() => setValue(value + 1)}>
                                +
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-1/3">
                        <Button variant="outlined">Add to cart</Button>
                        <Typography>Wish List</Typography>
                    </div>
                    <div>
                        <Typography>Category:Dresses,Women,Clothing</Typography>{' '}
                    </div>
                    <div>share</div>
                </div>
            </div>
        </div>
    );
}

export default Product;
