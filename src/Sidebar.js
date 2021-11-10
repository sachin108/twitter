import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";
function Sidebar() {
    return (
        <div class="sidebar">
            <TwitterIcon className='twiiterIcon'/>
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={ExploreIcon} text="Explore"/>            
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>            
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>            
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            <SidebarOption Icon={PersonIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>
            <Button variant="outlined" className='sidebar_tweet' fullWidth>
                Tweet</Button>
        </div>
    )
}

export default Sidebar;
