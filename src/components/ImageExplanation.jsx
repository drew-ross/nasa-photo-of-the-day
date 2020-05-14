import React from 'react';
import StyledDiv from './StyledDiv';

const ImageExplanation = ({ explanation }) => {

    return (
        <StyledDiv content>
            <section className="imageExplanation">
                <p>{explanation}</p>
            </section>
        </StyledDiv>
    )
}

export default ImageExplanation;