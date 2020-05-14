import React, { useEffect, useState } from 'react';
import Image from './Image';
import ImageHeader from './ImageHeader';
import ImageExplanation from './ImageExplanation';

const ImageContainer = (props) => {
    const { title, date, url, explanation } = props.nasaData;
    return (
        <div className='container'>
            <Image url={url} />
            <ImageHeader title={title} date={date} />
            <ImageExplanation explanation={explanation} />
        </div>
    )
}

export default ImageContainer;