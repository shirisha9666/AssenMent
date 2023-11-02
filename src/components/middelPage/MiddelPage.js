import Search from "./Search";
import MiddelPageData from "./middelpageData/MidelePageData";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Review from "./middelpageData/postsImages/md-img.png";
import personReview from "./middelpageData/postsImages/profile_img.png"
import Heart from "./middelpageData/postsImages/heart.png";
import IconHeard from "./middelpageData/postsImages/heart_1.png";
import SecoundInstaPost from "./middelpageData/postsImages/md_2.png";
import Comment from "./middelpageData/postsImages/comment.png";
import Share from "./middelpageData/postsImages/share.png"
import Review_2 from "./middelpageData/postsImages/cmt-img.png"
import BotomPage from "./bottomScorlBar/BttomPage"

console.log(MiddelPageData)

const MiddelPage = () => {
    return (
        <div>
            <Search />
            <div className='midlepage_parent_div'>
                <div className='midlepage_first_child'>

                    <div>
                        <img alt='' src={personReview} />
                        <div className='div_child'>
                            <p>Lara Leones</p>
                            <span>@thewallart</span>
                        </div>

                    </div>
                    <span>  <MoreVertIcon /></span>

                </div >
                <div className='post_section'>
                    <p>It is a long established fact that a
                        reader will be distracted by the readable
                        content
                        of a page when looking at its layout.<span>Read More</span> </p>

                    <img className='post_Image' src={Review} alt='' />
                    <img className='change_position' src={Heart} alt='' />
                    <div className='post_icon'>

                        <div>
                            <img src={IconHeard} alt='' />
                            <p>9.8k</p>
                        </div>
                        <div>
                            <img src={Comment} alt='' />
                            <p>9.8k</p>
                        </div>
                        <div>
                            <img src={Share} alt='' />
                            <p>9.8k</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secound insta Post  */}
            <div className='midlepage_parent_div'>
                <div className='midlepage_first_child'>

                    <div>
                        <img alt='' src={Review_2} />
                        <div className='div_child'>
                            <p>Thomas J.</p>
                            <span>@thecustomcreater</span>
                        </div>

                    </div>
                    <span>  <MoreVertIcon /></span>

                </div >
                <div className='post_section'>
                    <p>It is a long established fact that a
                        reader will be distracted by the readable
                        content
                        of a page when looking at its layout.<span>Read More</span> </p>

                    <img className='post_Image' src={SecoundInstaPost} alt='' />
                    <img className='change_position' src={Heart} alt='' />
                    <div className='post_icon'>

                        <div>
                            <img src={IconHeard} alt='' />
                            <p>9.8k</p>
                        </div>
                        <div>
                            <img src={Comment} alt='' />
                            <p>9.8k</p>
                        </div>
                        <div>
                            <img src={Share} alt='' />
                            <p>9.8k</p>
                        </div>
                    </div>
                </div>
            </div>

            <BotomPage />


        </div >



    )
}

export default MiddelPage