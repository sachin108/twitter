import React from 'react';
import './Feed.css';
import Tweetbox from './Tweetbox';
import Post from './Post';
import { useState, useEffect } from 'react';
import db from "./firebase";
import {
    TwitterTimelineEmbed, 
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import FlipMove from "react-flip-move";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      db.collection("posts").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
    }, []);
    return (
        <div className='feed'>
            <div className='feed_header'>
                <h3>Home</h3>
            </div>
            
        <Tweetbox />
        <FlipMove>
            {posts.map((post) => (
            <Post
                key={post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
            />
            ))}
            <TwitterTweetEmbed tweetId={"1383111548546162690"} /> 
            <TwitterTweetEmbed tweetId={"1460963731806904326"} />                 
            <TwitterTweetEmbed tweetId={"1461955219806380034"} />                
            <TwitterTweetEmbed tweetId={"1367927969046556674"} />                 
            <TwitterTweetEmbed tweetId={"1460629722707243010"} />                 
            <TwitterTweetEmbed tweetId={"1402664284912508937"} />                                
            <TwitterTweetEmbed tweetId={"1385322517678628871"} />  
            <TwitterTweetEmbed tweetId={"1454855696286199810"} />  
            <TwitterTweetEmbed tweetId={"1462153800635060230"} />                
            <TwitterTweetEmbed tweetId={"1461110156717133831"} />       
        </FlipMove>             
        </div>

    )
}

export default Feed
