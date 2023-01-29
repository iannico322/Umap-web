import { useState, useEffect } from "react";

import { Input } from "../../components/input/input";
import Cloud1 from "./../../media/image/cloud_2-big.png";
import { Link } from "react-router-dom";
import Map2 from "./../../media/image/map3d_2.png";
import { Navbar } from "../../components/navbar/navbar";
import { Load } from "../loader/loader";
import Alert from "@mui/material/Alert";
import axios from "axios";

import "./register.css";

export const Register = () => {
  

  const [firstname, setfistname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState(""); 
  const [password, setPassword] = useState("");
  
  const [passwordwarn, setPasswordwarn] = useState("");
  const [passwordwarncolor, setPasswordwarncolor] = useState("red");
  const [conpassword, setconPassword] = useState("");
  const [conpasswordwarn, setconPasswordwarn] = useState("");
  const [conpasswordwarncolor, setconPasswordwarncolor] = useState("red");


  const [alert, setAlert] = useState("hideAlert");
  const [warningtype,setwarningtype] = useState("success")
  const [warningmsg,setwarningmsg] = useState("Successfully registered!")

  const [numval, setnumval] = useState(false);
  const [specval, setspecval] = useState(false);
  const [lenval, setlenval] = useState(false);
  const [passvalid,setpassvalid] = useState(false);

  useEffect(() => {
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /\d/;

    if (password.length < 2) {
      setPasswordwarn("");
    } else {
        if (password.length < 5) {
         
          setPasswordwarn("Invalid Password");
          setlenval(false);
        } else {
          setPasswordwarn("");
          setlenval(true);
        }
        if (!password.match(specialCharacterRegex)) {
          console.log("speacial check");
          setspecval(false)
        } else {
          setspecval(true);
        }
        if (!password.match(numberRegex)) {
          setnumval(false)
          console.log("number");
        } else {
          setnumval(true);
        }

        if(numval === false || lenval ===false || specval ===false){
          setPasswordwarncolor("red")
          setPasswordwarn("Invalid Password");
          setpassvalid(false)
        }else{
          setpassvalid(true)
          setPasswordwarncolor("green")
          setPasswordwarn("Valid Password");
        }
    }
  }, [password]);

{/* <view>asd</view> */}
  useEffect(() => {
    

    if (conpassword.length < 2) {
      setconPasswordwarn("");
    } else {
        if (password != conpassword) {
          setconPasswordwarncolor("red")
          setconPasswordwarn("Password Not Match");
          
        } else {
          setconPasswordwarncolor("green")
          setconPasswordwarn("Password Matched");
          
        }
        
    }
  }, [conpassword]);

  function LogIn(e) {
    e.preventDefault();
    if (password === conpassword && passvalid ===true) {
      const url = "http://localhost/umap-server/registration.php";

      let fData = new FormData();
      
      fData.append("fullname", `${firstname} ${lastname} `);
      fData.append("email", email);
      fData.append("password", password);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
          setwarningtype("success")
          setwarningmsg("Successfully registered - but not yet verified")
          setAlert("");
      setTimeout(() => {
        setAlert("hideAlert");
      }, 5000);
      setfistname("");
      setlastname("");
      setemail("");
      setPassword("");
      setconPassword("");
  }else{
    setwarningtype("error")
    setwarningmsg("Kindly double check the form")
    setAlert("");
    setTimeout(() => {
      setAlert("hideAlert");
    }, 5000);
  }


}

  return (
    <>
      {/* <Load
      time = {3000}
     /> */}

      <div className="login-screen  animate__animated  animate__bounceInRight">
       
        
        <Navbar
          link2="Sign In"
          single=".Press"
          link1Address="/login"
          iconlink2=""
        />

        <div className="cloud-model-login2">
          <img src={Cloud1} alt="" />
        </div>

        <div className="map-model-login2">
          <img src={Map2} alt="" />
        </div>

        <div className="login-container2">
          <div className="login-box">
            <form onSubmit={LogIn}>
              <div className="form-title">
                <h2>SIGN UP</h2>
              </div>
              <div className="name">
                <Input
                  text="First Name"
                  placeholder="First Name"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => {
                    setfistname(e.target.value);
                  }}
                />

                <Input
                  text="Last Name"
                  placeholder="Last Name"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setlastname(e.target.value)}
                />
              </div>

              <Input
                text="Email"
                placeholder="Email"
                type="Email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <div className="passwords">
                <Input
                  text="Password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  inputWarning={passwordwarn}
                  color={passwordwarncolor}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  text="Confirm Password"
                  placeholder="Confirm Password"
                  type="password"
                  value={conpassword}
                  inputWarning={conpasswordwarn}
                  color={conpasswordwarncolor}
                  onChange={(e) => setconPassword(e.target.value)}
                />
              </div>

              <div className="down">
                <h3
                  onClick={() => {
                    const sign = document.querySelector(".sign");
                    sign.click();
                  }}
                >
                  have an account?<b> Sign In </b>
                </h3>
                <button type="submit">Sign Up</button>
              </div>
              <div className={alert}>
                <Alert variant="outlined" severity={warningtype}>
                  {warningmsg}
                </Alert>
              </div>
            </form>
          </div>
        </div>
        <Link to="/login" className="sign"></Link>
 
      </div>
    </>
  );
};
