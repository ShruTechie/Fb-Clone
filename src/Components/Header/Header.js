import React from 'react'
import './Header.css'
import logo from '../../assets/facebook.png'
import { 
    Search, 
    Home, 
    Flag, 
    SubscriptionsOutlined, 
    StorefrontOutlined, 
    SupervisedUserCircle, 
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import TopHeaderNotificationIcon from '../../assets/Facebook Web Icons/TopHeaderNotificationIcon.png';
import TopHeaderExpandMoreIcon from '../../assets/Facebook Web Icons/TopHeaderExpandMoreIcon.png';
import TopHeaderMenuIcon from '../../assets/Facebook Web Icons/TopHeaderMenuIcon.png';
import TopHeaderMessengerIcon from '../../assets/Facebook Web Icons/TopHeaderMessengerIcon.png';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src={logo} alt='Facebook logo' />
            </div>
            <div className='header__input'>
                <Search/>
                <input placeholder="Search Facebook" type="text" />
            </div>
            <div className="header__center">
                <div className="header__option
                header__option--active">
                    <Home fontSize="large"/>
                </div>
                <div className="header__option">
                    <Flag fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large"/>
                </div>
            </div>
            <div className='header__right'>
                <div className="header__info">
                    <Avatar src = {"user.photoURL"} alt='Facebook Profile Avatar'/>
                    <h4>{"User"}</h4>    
                    <img src={TopHeaderMenuIcon} alt="" width={40} height={40} />
                    <img src={TopHeaderMessengerIcon} alt="" width={40} height={40} />
                    <img src={TopHeaderNotificationIcon} alt="" width={40} height={40} />
                    <img src={TopHeaderExpandMoreIcon} alt="" width={40} height={40} />
                </div>
            </div>

        </div>
    )
}

export default Header