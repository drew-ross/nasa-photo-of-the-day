import React, { useEffect } from 'react';

const Image = ({url}) => {
    
    useEffect(() => {
        console.log('image changed');
    }, [url]);

    return (
        <img className='image' src={url}></img>
    )
}

export default Image;