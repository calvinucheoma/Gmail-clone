import { Apps, ArrowDropDown, Menu, Search, Notifications} from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import { logout, selectUser } from '../../features/user/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import './Header.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';


const Header = () => {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const signout = () => {
    signOut(auth)
        .then(() => {
            dispatch(logout());
            alert("Sign-out successful");
        }).catch((error) => {
            alert(error.message);
        });   
  };

  return (

    <div className='header'>

        <div className="headerLeft">

            <IconButton>
                <Menu className='headerIconButton' />
            </IconButton>

            <img 
                src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" 
                alt="Gmail logo" 
            />

        </div>

        <div className="headerMiddle">
            <Search/>
            <input type="text" placeholder='Search mail' />
            <ArrowDropDown className='headerArrowCaret'/>
        </div>

        <div className="headerRight">

            <IconButton>
               <Apps className='headerIconButton'/>
            </IconButton>

            <IconButton>
                <Notifications className='headerIconButton'/>
            </IconButton>

            <Avatar src={user?.photo} onClick={signout} className='headerAvatar'/>

        </div>

    </div>

  )

};

export default Header;