import React, {forwardRef} from 'react';
import './Post.css';
import {Avatar,Button} from '@material-ui/core';
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const Post = forwardRef(
    ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
        <div className="post" ref={ref}>
            <div>
                <Avatar src={avatar}/>
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <h3>{displayName}{" "} 
                            <span className='postHeader'>{verified && <VerifiedUserIcon className="userBadge" />} 
                            @{username}</span>
                        </h3>
                    </div>
                    <div className='postHeaderDescription'><p>{text}</p>
                    </div>
                </div>
                <img src={image}/>
                <div className='post_footer'>
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small'/>
                    <PublishIcon fontSize='small'/>
                </div>
            </div>
        </div>
    );
}
);
export default Post
