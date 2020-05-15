import React, { useEffect, useState } from 'react';
import StyledDiv from './StyledDiv';
import FlexDiv from './FlexDiv';

const Header = () => {

    return(
        <>
        <img className='nasaLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" alt=""/>
        <StyledDiv content short>
        <header className='App-header'>
            <h1>NASA Image of the Day</h1>
        </header>
        </StyledDiv>
        </>
    )
}

export default Header;