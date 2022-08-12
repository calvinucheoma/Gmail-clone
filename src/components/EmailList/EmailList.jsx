import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import EmailRow from '../EmailRow/EmailRow';
import Section from '../Section/Section';
import './EmailList.css';



const EmailList = () => {

  const [emails, setEmails] = useState([]);

  useEffect(() => {
     const getEmails = query(collection(db, 'emails'), orderBy('timestamp', 'desc'));

     const unsubscribe = onSnapshot(getEmails, (snapshot) => {
       setEmails(snapshot.docs.map((doc) => ({
          id: doc.id,
          email: doc.data()
       })))
     });

     return unsubscribe;
  }, []);

  return (

    <div className='emailList'>

        <div className="emailListSettings">

            <div className="emailListSettingsLeft">
                <Checkbox className='emailListIcon' />

                <IconButton>
                   <ArrowDropDown className='emailListIcon'/>
                </IconButton>

                <IconButton>
                   <Redo className='emailListIcon'/>
                </IconButton>

                <IconButton>
                   <MoreVert className='emailListIcon'/>
                </IconButton>  
            </div>

            <div className="emailListSettingsRight">
                <IconButton>
                    <ChevronLeft className='emailListIcon'/>
                </IconButton>

                <IconButton>
                    <ChevronRight className='emailListIcon'/>
                </IconButton>

                <IconButton>
                    <KeyboardHide className='emailListIcon'/>
                </IconButton>

                <IconButton>
                    <Settings className='emailListIcon'/>
                </IconButton>

            </div>

        </div>

        <div className="emailListSections">
            <Section Icon={Inbox} title='Primary' color='red' selected />
            <Section Icon={People} title='Social' color='#1A73E8' />
            <Section Icon={LocalOffer} title='Promotions' color='green' />
        </div>

        <div className="emailListRow">
             {emails.map(({id, email}) => (
                  <EmailRow
                    key={id} 
                    id={id} 
                    title={email.to} 
                    subject={email.subject} 
                    description={email.message} 
                    time={new Date(email.timestamp?.seconds * 1000).toUTCString()}
                  />
             ))}
        </div>

    </div>

  )

};

export default EmailList;