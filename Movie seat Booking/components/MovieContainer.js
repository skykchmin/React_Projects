import React from "react";
import styled from "styled-components";

const Movie_container = styled.div`
    margin: 20px 0;
`;

const MovieSelect = styled.select`
    background-color: #fff;
    border: 0;
    border-radius: 5px;
    font-size: 14px;
    margin-left: 10px;
    padding: 5px 15px 5px 15px;
    /* 운영체제별로 모습이 달라보이지 않게 작성 */
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
`;

const MovieContainer = () => {
    return (
        <Movie_container>
            <label>Pick a movie: </label>
            <MovieSelect>
                <option value="10">Avengers: Endgame ($10)</option>
                <option value="12">Joker ($12)</option>
                <option value="8">Toy story 4 ($8)</option>
                <option value="9">The Lion King ($9)</option>
            </MovieSelect>
        </Movie_container>
    );
};

export default MovieContainer;
