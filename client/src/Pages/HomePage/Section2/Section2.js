import React from 'react';
import { Container, Card1, SubCard, Card2 } from './style';
import banner2 from '../../../Assets/Images/banner-2.jpg';
import banner3 from '../../../Assets/Images/banner-3.jpg';
import { Button } from '@mui/material';

function Section2() {
    return (
        <>
            <Container className="flex-wrap">
                <Card1>
                    <SubCard>
                        <div>
                            <h3 id="child" className="text-4xl font-serif">
                                Trending now
                            </h3>
                            <h1
                                id="child"
                                className="text-xl font-serif font-bold"
                            >
                                This Week's/n Most Wanted
                            </h1>
                            <h3 id="child">Discover Now</h3>
                        </div>
                    </SubCard>
                </Card1>
                <div
                    className="card-row-2 flex flex-col justify-between"
                    style={{ height: '85vh' }}
                >
                    <Card2 bg={banner2}>
                        <div className=" w-10/12   p-8 flex justify-center items-center h-10/12 hover:border-double hover:border-4 hover:bg-opacity-25  hover:border-black hover:bg-gray-100">
                            <div className="sub-card">
                                <p className="font-serif text-3xl">
                                    Limited time only
                                </p>
                                <h1 className="text-xl font-bold">
                                    Trainers & Sportwear
                                </h1>
                                <Button
                                    style={{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        margin: '10px '
                                    }}
                                >
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </Card2>
                    <Card2 bg={banner3}>
                        <div className=" w-10/12   p-8 flex justify-center items-center h-10/12 hover:border-double hover:border-4 hover:bg-opacity-25  hover:border-black hover:bg-gray-100">
                            <div className="sub-card">
                                <p className="font-serif text-3xl">
                                    Limited time only
                                </p>
                                <h1 className="text-xl font-bold">
                                    Trainers & Sportwear
                                </h1>
                                <Button
                                    style={{
                                        backgroundColor: 'black',
                                        color: 'white',
                                        margin: '10px '
                                    }}
                                >
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </Card2>
                </div>
            </Container>
        </>
    );
}

export default Section2;
