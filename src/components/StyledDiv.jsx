import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border-radius: 5px;
    margin: 1rem auto;
    padding: 1rem;
    max-width: 80%;
    box-shadow: 0 0 5px 0 #343538;
    ${props => props.content ? `background: #343538; color: white;` : `background: white`}
    ${props => props.short ? `width: 50%` : null}
`;

export default StyledDiv;