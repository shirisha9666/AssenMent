import React, { useState } from 'react'
import SidebarDara from "./data/Data"

import "./slidebar.css";
import SlidebarFooter from './SlidebarFooter';
import LogOUt from "../../img/logout.png"
import MenuIcon from '@mui/icons-material/Menu';



const Slidebar = () => {
    const [selecterData, setSelecterData] = useState(false)
    return (
        <>

            <div className='slidebar_section_parent_div'>
                <div>
                    <div className='logo'>
                        <p>LOGO</p>

                    </div>

                    <div className='nav-links_parent '>
                        {SidebarDara.map((item, index) => {
                            return (
                                <nav className={selecterData === index ? " active" : ""} key={index}
                                    onClick={() => setSelecterData(index)}>
                                    <img src={item.iconName} alt='' />
                                    <p>{item.name}</p>
                                </nav>
                            )
                        })}
                        <div className='log_out_parent'>
                            <img src={LogOUt} alt='' />
                            <p>Log out</p>
                        </div>


                    </div>

                </div>
                <SlidebarFooter />
            </div>
        </>
    )
}

export default Slidebar