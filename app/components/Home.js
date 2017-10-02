import React from 'react';
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div className='home-container'>
            <h1>Github battle carnal</h1>
            <Link className='button' to='/battle' >
                Battle your friends
            </Link>
        </div>
    );
};

export default Home;