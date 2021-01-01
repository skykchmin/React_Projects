import React from 'react'
import styled from 'styled-components';

const ShowcaseWrapper = styled.ul `
    background: rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    border-radius: 5px;
    color: #777;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
`;

const SeatStyle = styled.li `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`;

const Seat = styled.div `
    background-color: #444451;
    height: 12px;
    width: 15px;
    margin: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`;

const Seat_selected = styled(Seat)` 
    background-color: #6feaf6;
`;

const Seat_occupied = styled(Seat)` 
    background-color: #fff;
`;

const SeatText = styled.small `
    margin-left: 2px;
`;



const Showcase = () => {
    return(
        <ShowcaseWrapper>
        <SeatStyle>
            <Seat></Seat>
            <SeatText>N/A</SeatText>
        </SeatStyle>
        <SeatStyle>
            <Seat_selected></Seat_selected>
            <SeatText>Selected</SeatText>
        </SeatStyle>
        <SeatStyle>
            <Seat_occupied></Seat_occupied>
            <SeatText>Occupied</SeatText>
        </SeatStyle>
    </ShowcaseWrapper>
    );
}

export default Showcase;