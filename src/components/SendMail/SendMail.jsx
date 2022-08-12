import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import './SendMail.css';
import {useForm} from 'react-hook-form';
import { closeSendMessage } from '../../features/mail/mailSlice';
import {useDispatch} from 'react-redux';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';



const SendMail = () => {

  const dispatch = useDispatch();

  const {register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit = (formData) => {
    // console.log(data);
    const emailRef = collection(db, 'emails');
    addDoc(emailRef, {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp()
    });
    dispatch(closeSendMessage());
  };

  return (

    <div className='sendMail'>

        <div className="sendMailHeader">
            <h3> New Message </h3>
            <Close className='sendMailClose' onClick={() => dispatch(closeSendMessage())}/>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

            <input 
                type="email" 
                placeholder='To' 
                {...register('to', {required: true})} 
            />
            {errors.to && <p className='sendMailError'> 'To' is Required </p>}

            <input
                type="text" 
                placeholder='Subject' 
                {...register('subject', {required: true})} 
            />
            {errors.subject && <p className='sendMailError'> 'Subject' is Required </p>}

            <input 
                type="text" 
                placeholder='Message...' 
                className='sendMailMessage' 
                {...register('message', {required: true})} 
            />
            {errors.message && <p className='sendMailError'> 'Message' is Required </p>}

            <div className="sendMailOptions">
                <Button 
                    variant='contained' 
                    color='primary' 
                    type='submit' 
                    className='sendMailButton'
                > 
                   Send 
                </Button>
            </div>

        </form>

    </div>

  )

};

export default SendMail;