import React from 'react';

const ImageHeader = ({ title, date }) => {

    return (
        <section>
            <h2 className='imageTitle'>{title}</h2>
            <h3 className='imageDate'>{date}</h3>
        </section>
    )
}

export default ImageHeader;