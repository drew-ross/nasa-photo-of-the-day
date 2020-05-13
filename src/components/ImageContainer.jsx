import React, { useEffect, useState } from 'react';
import Image from './Image';
import ImageHeader from './ImageHeader';
import ImageExplanation from './ImageExplanation';

const ImageContainer = (props) => {
    const { title, date, hdurl, explanation } = props.nasaData;
    return (
        <div className='container'>
            <ImageHeader title={title} date={date} />
            <Image hdurl={hdurl} />
            <ImageExplanation explanation={explanation} />
        </div>
    )
}

export default ImageContainer;