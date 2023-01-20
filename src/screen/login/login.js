import { useState, useEffect } from "react";

import { Input } from "../../components/input/input";
import Cloud1 from "./../../media/image/cloud_2-big.png";
import { Link } from "react-router-dom";
import Map2 from "./../../media/image/map3d_2.png";
import { Navbar } from "../../components/navbar/navbar";
import { Load } from "../loader/loader";
import Alert from "@mui/material/Alert";
import axios from "axios";
import "./login.css";
import {
  addCredentials,
  users,
} from './../../cache/userCredentials';
import {  useDispatch,useSelector  } from 'react-redux';


export const Login = () => {
  const credentials = useSelector(users);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("invalid hideAlert");
  const [warningcolor,setwarningcolor] = useState("rgba(70, 62, 40, 0.3)")

  const [textwarning,settextwarning] = useState("Invalid Username or Password");
  const [warningtype,setwarningtype] = useState("error")

  const dispatch = useDispatch();
  console.log(credentials)
  function LogIn(e) {
    e.preventDefault();
    const url = "http://localhost/umap-server/login.php";

    let fData = new FormData();
    fData.append("username", username);
    fData.append("password", password);
    axios
      .post(url, fData)
      .then((response) => {
        if (response.data === "Login") {
          // setUsername("");
          // setPassword("");
        
          setAlert("");
          const url = "http://localhost/umap-server/loginCredentials.php";
          axios.post(url, fData).then((response) => {
              
              dispatch(addCredentials(response.data[0].ID))
              dispatch(addCredentials(response.data[0].FullName))
              dispatch(addCredentials(response.data[0].Email))
              dispatch(addCredentials(response.data[0].PhoneNum))
              dispatch(addCredentials(response.data[0].password))
              dispatch(addCredentials(response.data[0].UserType))
             
              if(response.data[0].UserType ==="admin"){
                setwarningtype("success")
                settextwarning("Welcome Back Master")
                setwarningcolor("green")
                setTimeout(() => {
                  setAlert("hideAlert");
                  setwarningcolor("rgba(70, 62, 40, 0.3)")
                  document.querySelector(".admin").click();
                }, 1000);
              }else if(response.data[0].UserType ==="user"){
                setwarningcolor("green")
                setwarningtype("success")
                settextwarning(`Welcome Back ${response.data[0].FullName}`)
                setTimeout(() => {
                  setAlert("hideAlert");
                  setwarningcolor("rgba(70, 62, 40, 0.3)")
                  document.querySelector(".main").click();
                }, 2000);
              }
              else{
                setwarningtype("warning")
                setwarningcolor("orange")
                settextwarning("Account not yet accepted")
                setAlert("invalid");
                setTimeout(() => {
                  setwarningcolor("rgba(70, 62, 40, 0.3)")
                  setAlert("hideAlert");
                }, 10000);
              }

              
            })
          

            
        } else {
          setwarningtype("error")
          setwarningcolor("red")
          settextwarning("Invalid Username or Password")
          setAlert("invalid");
          setTimeout(() => {
            setAlert("hideAlert");
            setwarningcolor("rgba(70, 62, 40, 0.3)")
          }, 10000);
        }
      })
      .catch((error) => {});
  }
  return (
    <>

    
      <div className="login-screen animate__animated animate__bounceInLeft">
        <Navbar
          link2="Register"
          single=".Press"
          link1Address="/register"
          iconlink2=""
        />

        <div className="cloud-model-login">
          <img src={Cloud1} alt="" />
        </div>

        <div className="map-model-login">
          <img src={Map2} alt="" />
        </div>

        <div className="login-container" >
          <div className="login-box" style={{border:`1px solid ${warningcolor}`}}>
            <form onSubmit={LogIn}>
              <div className="form-title">
                <h2>SIGN IN</h2>
              </div>

              <Input
                text="Username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                text="Password"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="down">
                <h3 onClick={()=>{
                    document.querySelector(".forgot").click();
                }}>forgot password?</h3>
                <button type="submit">Sign In</button>
              </div>

              <div className={alert}>
          <Alert variant="outlined" severity={warningtype}>
           {textwarning}
          </Alert>
        </div>
            </form>
          </div>
        </div>
        <Link to="/forgot" className="forgot"></Link>
        <Link to="/main" className="main"></Link>
        <Link to="/admin" className="admin"></Link>
      </div>
    </>
  );
};
