import React, { useEffect, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc'

function GoogleLogin() {
  const { user, setUser, setUserId } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    handleGoogleLogin();
  }, [user,setUser])
  const handleGoogleLogin = async() => {
    try{
        const response = await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user?.access_token}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${user?.access_token}`,
                Accept: "application/json",
              },
            }
          )
        
        const data = await response.json();
        console.log('user data', data);
        if(!data.error){
            localStorage.setItem('user', JSON.stringify({id: data.id, username: data.given_name}))
            setUser(data.given_name)
            setUserId(data.id);
            navigate('/');
        }
    }
    catch(err){
        console.log('google login err', err)
    }
  }


  const handleLogin = useGoogleLogin({
    onSuccess: (user) => {
        setUser(user);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return <div>
    <div className="google" onClick={handleLogin}>Continue with Google <FcGoogle size={20}/></div>
  </div>;
}

export default GoogleLogin;
