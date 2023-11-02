import React from 'react'
import "./middelPage.css"

import MenuBar from "../../img/search.png";
import Search_icon from "../../img/search_icon.png";


const Search = () => {
    return (
        <div className='search_parent'>
            <div className='search-first-child'>
                <img alt='' src={Search_icon} />
                <p>Search here...</p>
            </div>
            <div className='search-secound-child'>
                <img alt='' src={MenuBar} />
                <p>Filters</p>
            </div>

        </div>
    )
}

export default Search