import React from 'react';
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
import {
    TwitterTimelineEmbed, 
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";

function Feed() {
    return (
        <div className='feed'>
            <div className='feed_header'>
                <h3>Home</h3>
            </div>
            <Tweetbox/>
            <TwitterTweetEmbed tweetId={"1385322517678628871"} />  
            <TwitterTweetEmbed tweetId={"1334575278299877377"} />  
            <TwitterTweetEmbed tweetId={"1217122703766970369"} />                
            <TwitterTweetEmbed tweetId={"1384207559184162819"} />                
            {/*<Post/>*/}    
        </div>
    )
}

export default Feed
