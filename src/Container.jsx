import React from 'react';
import {useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {firebase} from './Firebase/firebase'

import Login from './pages/Login'
import Home from './pages/Home'
import Error from './pages/Error'
import G01 from './pages/G01'
import G02 from './pages/G02'
import G03 from './pages/G03'
import G04 from './pages/G04'
import G05 from './pages/G05'
import G06 from './pages/G06'
import G07 from './pages/G07'
import G08 from './pages/G08'
import G09 from './pages/G09'
import G10 from './pages/G10'
import G11 from './pages/G11'
import Champ from './pages/Champ'
import Scoring from './pages/Scoring'
import Photograph from './pages/Photograph'

const Container = () =>{
    
    const [User,setUser] = useState("");
    const [IsUser,setIsUser] = useState(false);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                let UserTempNode = {
                    UserName:user._delegate.displayName,
                    UserEmail:user._delegate.email,
                    UserPhoto:user._delegate.photoURL,
                };
            setUser(UserTempNode);
            return setIsUser(true)
        }
        setIsUser(false)
     })
    },[])
    
    

    if(IsUser === true){
        return(
            <Router>
                <Routes>
                    <Route path='/' element={<Home User={User}/>}/>
                    <Route path='/Home' element={<Home User={User}/>}/>
                    <Route path='/G01' element={<G01 User={User}/>}/>
                    <Route path='/G02' element={<G02 User={User}/>}/>
                    <Route path='/G03' element={<G03 User={User}/>}/>
                    <Route path='/G04' element={<G04 User={User}/>}/>
                    <Route path='/G05' element={<G05 User={User}/>}/>
                    <Route path='/G06' element={<G06 User={User}/>}/>
                    <Route path='/G07' element={<G07 User={User}/>}/>
                    <Route path='/G08' element={<G08 User={User}/>}/>
                    <Route path='/G09' element={<G09 User={User}/>}/>
                    <Route path='/G10' element={<G10 User={User}/>}/>
                    <Route path='/G11' element={<G11 User={User}/>}/>
                    <Route path='/Champ' element={<Champ User={User}/>}/>
                    <Route path='/Scoring' element={<Scoring User={User}/>}/>
                    <Route path='/Photograph' element={<Photograph User={User}/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </Router>
        )
    }else{
        return(
            <Router>
                <Routes>
                    <Route path='/' element={<Login setIsUser={()=>{setIsUser(true)}} setUser={setUser}/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </Router>
        )
    }
}

export default Container