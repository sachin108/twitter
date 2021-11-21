import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed, 
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';
function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input placeholder="  Search Twitter" type="text"/>
            </div>
            <div className="widgets_container">
                <h3>What's happening</h3>
                <TwitterTweetEmbed tweetId={"1457754817569361925"} />                
                <TwitterTweetEmbed tweetId={"1458090274471743488"} />
                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="earth" options={{ height: 400 }}/>
                <TwitterShareButton url={"https://www.instagram.com/gameofthrones/"}/>
           </div>
        </div>
    )
}

export default Widgets
