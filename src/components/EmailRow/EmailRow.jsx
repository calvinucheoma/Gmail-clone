import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectMail } from '../../features/mail/mailSlice';
import './EmailRow.css';



const EmailRow = ({id, title, subject, description, time}) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
        selectMail({
            id, 
            title, 
            subject, 
            description, 
            time
        })
    );
    navigate('/mail');
  };

  return (

    <div className='emailRow' onClick={openMail}>

        <div className="emailRowOptions">
            <Checkbox className='emailRowCheckbox'/>

            <IconButton>
                <StarBorderOutlined className='emailRowIcon'/>
            </IconButton>

            <IconButton>
                <LabelImportantOutlined className='emailRowIcon'/>
            </IconButton>
        </div>

        <h3 className="emailRowTitle">
            {title}
        </h3>

        <div className="emailRowMessage">
             <h4> 
                {subject}{" "}
                <span className="emailRowDescription">
                    -{description}
                </span>
            </h4>
        </div>

        <p className="emailRowTime">
            {time}
        </p>

    </div>

  )

};

export default EmailRow;