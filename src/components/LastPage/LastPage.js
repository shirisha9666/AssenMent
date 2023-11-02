import React from 'react'
import LastPageData from './LastPageData'
import "./lastpage.css";
import Footer from './Footer';
// import Image from "../../img/img-1.png"
console.log(LastPageData)
// import CircleIcon from '@mui/icons-material/Circle'
const LastPage = () => {
    return (
        <div className='last_section'>
            <div className='box'>
                <p>Become a Seller</p>
            </div>
            <div className='box_1'>
                <span>Artists</span>
                <p>Photographers</p>
            </div>
            <div className='boxsess'>
                {LastPageData.map((item) => (
                    <div className='box_3' style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center"
                    }} key={item}>
                        <div className='child_box'>

                            <img src={item.SmImage} alt='' />
                            <p className='dot'>.</p>
                        </div>
                        <div>
                            <p>{item.heading}</p>
                            <span>{item.para}</span>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default LastPage