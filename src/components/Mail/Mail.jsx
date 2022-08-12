import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import {useSelector} from 'react-redux';
import { selectOpenMail } from '../../features/mail/mailSlice';
import './Mail.css';



const Mail = () => {

  const navigate = useNavigate();

  const selectedMail = useSelector(selectOpenMail);

  return (

    <div className='mail'>
        
        <div className="mailTools">

            <div className="mailToolsLeft">

                <IconButton onClick={() => navigate('/')}>
                    <ArrowBack className='mailToolsLeftIcon'/>
                </IconButton>

                <IconButton>
                    <MoveToInbox className='mailToolsLeftIcon'/>
                </IconButton>

                <IconButton>
                    <Error className='mailToolsLeftIcon'/>
                </IconButton>

                <IconButton>
                    <Delete className='mailToolsLeftIcon'/>
                </IconButton>

                <IconButton>
                    <Email className='mailToolsLeftIcon'/>
                </IconButton>

                <IconButton>
                    <WatchLater className='mailToolsLeftIcon'/>
                </IconButton>

                <IconButton>
                    <CheckCircle className='mailToolsLeftIcon'/>
                </IconButton>

                <IconButton>
                    <LabelImportant className='mailToolsLeftIcon'/>
                </IconButton>

                <IconButton>
                    <MoreVert className='mailToolsLeftIcon'/>
                </IconButton>

            </div>

            <div className="mailToolsRight">

                <IconButton>
                    <UnfoldMore className='mailToolsLeftIcon'/>
                </IconButton>

                <IconButton>
                    <Print className='mailToolsLeftIcon'/>
                </IconButton>

                <IconButton>
                    <ExitToApp className='mailToolsLeftIcon'/>
                </IconButton>

            </div>

        </div>

        <div className="mailBody">

            <div className="mailBodyHeader">
                <h2>{selectedMail?.subject}</h2>
                <LabelImportant className='mailImportant' />
                <p>{selectedMail?.title}</p>
                <p className='mailBodyHeaderTime'>{selectedMail?.time}</p>
            </div>

            <div className="mailBodyMessage">
                <p>{selectedMail?.description}</p> 
            </div>

        </div>


    </div>

  )

};

export default Mail;