import { Typography } from '@mui/material';
import React from 'react';
import Image2 from '../../../Assets/Images/2.png';
import Image3 from '../../../Assets/Images/2.png';
import Image4 from '../../../Assets/Images/3.png';
import Image5 from '../../../Assets/Images/4.png';
import Image6 from '../../../Assets/Images/5.png';
import Image7 from '../../../Assets/Images/6.png';
import { Container, BrandLogo, H1, Button } from './style';

const BrandLogos = [Image2, Image3, Image4, Image5, Image6, Image7];

function Section1() {
    return (
        <>
            <Container>
                <div
                    className="motto-text"
                    style={{ color: 'white', textAlign: 'center' }}
                >
                    <Typography
                        fontFamily="fantasy
                    "
                        fontWeight="100"
                        variant="h5"
                    ></Typography>
                    <H1 className="">𝓜𝔂𝓼𝓽𝓮𝓻𝔂 𝓓𝓮𝓪𝓵𝓼</H1>
                    <Typography
                        variant="h5"
                        fontFamily="fantasy"
                        fontWeight="100"
                    >
                        Online Only
                    </Typography>
                    <Button
                        style={{
                            padding: '10px 30px',
                            margin: '20px 0px'
                        }}
                        color="inherit"
                        variant="outlined"
                    >
                        Discover Now
                    </Button>
                </div>
            </Container>
            <BrandLogo>
                {BrandLogos.map((logo) => (
                    <div
                        className="brand-images-row"
                        style={{
                            marginTop: '10px',
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100px',
                            borderLeft: '0.1px solid black',
                            borderTop: '0.1px solid black',
                            borderBottom: '0.1px solid black'
                        }}
                    >
                        <img src={logo} alt="image1" />
                    </div>
                ))}
            </BrandLogo>
        </>
    );
}

export default Section1;
