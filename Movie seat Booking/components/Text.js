import React from 'react';
import styled from 'styled-components';

const TotalText = styled.p `
    margin: 5px 0;
`;

const Span = styled.span `
    color: #6feaf6;
`;

const Text = () => {
    return(
        <TotalText>
        You have selected 
        <Span> 0 </Span>
        seat for a price of $ <Span>0</Span>
        </TotalText>
    );
}

export default Text;