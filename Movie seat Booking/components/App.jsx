import React from 'react';
import MovieContainer from './components/MovieContainer';
import Showcase from './components/Showcase';
import Container from './components/Container';
import Text from './components/Text';
import styled from 'styled-components';

const ContainerWrapper = styled.div`

    box-sizing: border-box;
    background-color: #242333;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Lato', sans-serif;
    margin: 0;
`;

const App = () => {
    return(
        <ContainerWrapper>
            <MovieContainer></MovieContainer>
            <Showcase></Showcase>
            <Container></Container>
            <Text></Text>
        </ContainerWrapper>
    );
}

export default App;