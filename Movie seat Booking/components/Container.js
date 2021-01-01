import React from "react";
import styled from 'styled-components';

const ContainerWrapper = styled.div`

    perspective: 1000px; /* 3D 기울기 */
    margin-bottom: 30px;
`;

const Seat = styled.div`
    background-color: #444451;
    height: 12px;
    width: 15px;
    margin: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    &:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`;

const Seat_selected = styled.div`
    background-color: #6feaf6;
`;

const Seat_occupied = styled(Seat)` 
    background-color: #fff;
`;

const Row = styled.div`
    display: flex;
`;

const Screen = styled.div`
    background-color: #fff;
    height: 70px;
    width: 100%;
    margin: 15px 0;
    transform: rotateX(-45deg);
    box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
`;

const Container = () => {
    return (
        <>
            <ContainerWrapper>
                <Screen></Screen>
                <Row>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                </Row>
                <Row>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat_occupied></Seat_occupied>
                    <Seat_occupied></Seat_occupied>
                    <Seat></Seat>
                    <Seat_occupied></Seat_occupied>
                    <Seat_occupied></Seat_occupied>
                </Row>
                <Row>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat_occupied></Seat_occupied>
                    <Seat_occupied></Seat_occupied>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                </Row>
                <Row>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat_occupied></Seat_occupied>
                    <Seat_occupied></Seat_occupied>
                    <Seat_occupied></Seat_occupied>
                    <Seat></Seat>
                </Row>
                <Row>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                </Row>
                <Row>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                    <Seat></Seat>
                </Row>
            </ContainerWrapper>
        </>
    );
};

export default Container;
