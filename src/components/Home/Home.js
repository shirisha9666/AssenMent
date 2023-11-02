import React from 'react'
import Slidebar from '../slidebar/Slidebar';
import "./home.css"
import MiddelPage from '../middelPage/MiddelPage';
import LastPage from '../LastPage/LastPage';

const Home = () => {
    return (
        <div className='parent_component' >

            <span><Slidebar /></span>
            <sapn><MiddelPage /></sapn>
            <span> <LastPage /></span>



        </div>
    )
}

export default Home