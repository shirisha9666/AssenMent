import React from 'react'
import ScrollBarData from '../middelpageData/ScrollBarData';
import "./bottomPage.css"


const BttomPage = () => {
    return (
        <div className='botomScroll_bar'>
            {
                ScrollBarData.map((item) => {
                    return (
                        <>
                            <div className='bottom_Scoll_bar'>
                                <img src={item.img} alt='' />
                                <p>{item.para}</p>
                                <div className='start_icon'>
                                    <p>{item.rate}</p>
                                    <div>
                                        <img alt='' src={item.star} />
                                        <img alt='' src={item.star} />
                                        <img alt='' src={item.star} />
                                        <img alt='' src={item.star} />
                                        <img alt='' src={item.star} />

                                    </div>

                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default BttomPage