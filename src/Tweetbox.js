import {React, useState} from 'react';
import './Tweetbox.css';
import {Avatar,Button} from '@material-ui/core';
import db from "./firebase";
function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Sachin Rajput",
      username: "sachin108",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://i.pinimg.com/474x/cf/75/60/cf7560a95b149dd8ac0c65549e02df98.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetbox_input'>
                <Avatar src="https://i.pinimg.com/474x/cf/75/60/cf7560a95b149dd8ac0c65549e02df98.jpg"/>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} placeholder="What's happening?" type="text"/>
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button
                onClick={sendTweet} type="submit" className="tweetButton">
                Tweet
                </Button>
            </form>
        </div>
    )
}

export default Tweetbox
