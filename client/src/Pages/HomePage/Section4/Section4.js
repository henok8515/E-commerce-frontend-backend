import React from 'react';
import { Container, Content } from './style';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
function Section4() {
    return (
        <>
            <Container>
                <Content>
                    <span className="font-serif text-2xl font-black">
                        NEW COLLECTION
                    </span>
                    <h1 className="text-6xl m-5 font-bold font-serif">
                        Winter'19/Spring '20
                    </h1>
                    <PlayCircleFilledWhiteIcon
                        style={{
                            height: '150px',
                            width: '150px'
                        }}
                    />
                </Content>
            </Container>
        </>
    );
}

export default Section4;
