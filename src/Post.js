import React from 'react';
import './Post.css';
import {Avatar,Button} from '@material-ui/core';
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className='post'>
            <div>
                <Avatar src="http://www.celebzz.com/wp-content/uploads/2020/12/anya-taylor-joy-fotogramas-magazine-spain-january-2021-4.jpg"/>
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <h3>Anya<span className='postHeader'><VerifiedUserIcon className='userBadge'/></span></h3>
                    </div>
                    <div className='postHeaderDescription'><p>Princess Arianne Nymeros Martell, better known simply as Arianne Martell.</p>
                    </div>
                </div>
                <img src="https://i.pinimg.com/736x/a4/99/99/a49999c3f6a77236e56088e2ad19cbcf--game-of-thrones-books-game-of-thrones-jewelry.jpg"/>
                <div className='post_footer'>
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <PublishIcon fontSize='small'/>
                </div>
            </div>
        </div>
    )
}

export default Post
