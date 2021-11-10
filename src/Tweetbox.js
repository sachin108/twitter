import React from 'react';
import './Tweetbox.css';
import {Avatar,Button} from '@material-ui/core';
function Tweetbox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetbox_input'>
                <Avatar src="http://3.bp.blogspot.com/-n5fwqrtLQhg/T6CoisMEocI/AAAAAAAAET8/aAwQx1B5w94/s1600/Friends+With+Benefits+1.jpg"/>
                <input placeholder="What's happening?" type="text"/>
                </div>
                <input className='imageInput' placeholder="Optional: Enter image URL" type="text"/>
                <Button className='tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
