import React, { useEffect, useState } from 'react';

const ImageContainer = (props) => {
    const { title, date, hdurl, explanation } = props.nasaData;
    return (
        <div className='container'>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <img src={hdurl} alt='NASA of the day'></img>
            <p>{explanation}</p>
        </div>
    )
}

export default ImageContainer;