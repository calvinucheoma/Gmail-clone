import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import React from 'react';
import SidebarOption from '../SidebarOption/SidebarOption';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/mail/mailSlice';



const Sidebar = () => {

  const dispatch = useDispatch();

  return (

    <div className='sidebar'>

        <Button 
          startIcon={<Add fontSize='large' className='sidebarAddIcon'/>} 
          className='sidebarCompose'
          onClick={() => dispatch(openSendMessage())}
        >
             Compose 
        </Button>

        <SidebarOption Icon={Inbox} title='Inbox' number={54} selected={true} />
        <SidebarOption Icon={Star} title='Starred' number={27} />
        <SidebarOption Icon={AccessTime} title='Snoozed' number={12} />
        <SidebarOption Icon={LabelImportant} title='Important' number={34} />
        <SidebarOption Icon={NearMe} title='Sent' number={7} />
        <SidebarOption Icon={Note} title='Drafts' number={3} />
        <SidebarOption Icon={ExpandMore} title='More' number={54} />

        <div className="sidebarFooter">

           <div className="sidebarFooterIcons">
               <IconButton>
                  <Person className='sidebarFooterIcon'/>
               </IconButton>

               <IconButton>
                  <Duo className='sidebarFooterIcon'/>
               </IconButton>

               <IconButton>
                  <Phone className='sidebarFooterIcon'/>
               </IconButton>
           </div>

        </div>

    </div>

  )

};

export default Sidebar;