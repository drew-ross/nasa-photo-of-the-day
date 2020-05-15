import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    border-radius: 5px;
    box-shadow: 0 0 5px 0;
`;

const Image = ({url}) => {
    
    useEffect(() => {
        console.log('image changed');
    }, [url]);

    return (
        <StyledImg className='image' src={url}></StyledImg>
    )
}

export default Image;