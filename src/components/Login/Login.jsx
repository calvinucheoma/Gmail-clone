import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../../firebase';
import {useDispatch} from 'react-redux';
import './Login.css';
import { login } from '../../features/user/userSlice';


const Login = () => {

  const dispatch = useDispatch();

  const signIn = () => {
     signInWithPopup(auth, provider)
        .then(({user}) => {
            // console.log(user)
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }))
        }).catch((error) => {
            alert(error.message);
        });
  };

  return (

    <div className='login'>

        <div className="loginContainer">

            <img 
                src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" 
                alt="Gmail logo" 
            />

            <Button 
                variant='contained' 
                color='primary' 
                onClick={signIn}
                className='loginButton'
            > 
                Login 
            </Button>

        </div>

    </div>

  )

};

export default Login;
