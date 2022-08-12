import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EmailList from './components/EmailList/EmailList';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Mail from './components/Mail/Mail';
import SendMail from './components/SendMail/SendMail';
import Sidebar from './components/Sidebar/Sidebar';
import { selectSendMessageIsOpen } from './features/mail/mailSlice';
import { login, logout, selectUser } from './features/user/userSlice';
import { auth } from './firebase';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    
    const changeUser = onAuthStateChanged(auth,(user) => {
      if(user){
        //user has logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photo: user.photoURL
        }));
      } else {
        dispatch(logout());
      }
    });

    return () => {
      changeUser();
    };

  }, [dispatch]);

  return (

    <Router>

        {!user ? (
            <Login/>
          ) : (
            <div className="app">
                <Header/>

                <div className="appBody">
                    <Sidebar/>

                    <Routes>
                        <Route path='/' element={<EmailList/>} />
                        <Route path='/mail' element={<Mail/>} />
                    </Routes>

                </div>

              {sendMessageIsOpen && <SendMail/>}
                
            </div>
          )
        }

    </Router>


  );
  
};

export default App;
