import { React } from "react";
import { Navbar } from "../../components/navbar/navbar";
import Cloud1 from "./../../media/image/cloud_1.png";
import Cloud2 from "./../../media/image/cloud_2.png";
import Map1 from "./../../media/image/map3d_1.png";
import { Link } from "react-router-dom";
import { Load } from "../loader/loader";
import downloadIcon from "../../media/image/download-icon.svg";
import { useDispatch} from "react-redux";
import { addRoom } from "../../cache/umapRoom";
import "./welcome.css";
import "animate.css";
import {useEffect } from "react";
import axios from "axios";



export const Welcome = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    getRooms();
  }, []);


  



  

  function getRooms() {
    axios
      .get("http://localhost/umap-server/getRooms.php")
      .then(function (response) {
        dispatch(addRoom([response.data]))
          // console.log(roomses[0].filter(e=>e.buildingNumber == 9).map(e=>e.roomName))
          
      });
  }
  

  return (
    <>
   

    <Load time = {3000}/>
      <div className="welcome-screen ">
        <Navbar
          link1="Sign In"
          link1Address="/login"
          link2="Download"
          single=".download"
          iconlink2={downloadIcon}
        />
        
        <div className="cloud-model">
          <img src={Cloud1} alt="" />
        </div>

        <div className="map-model">
          <img src={Map1} alt="" />
          <img src={Cloud2} alt="" />
        </div>

        <div className="welcome-container  animate__animated animate__bounce">
          <div className="welcome-box">
            <h1>
              Welcome to
              <br />
              <span>USTP MAP</span>
            </h1>
            <div>
              <button
                onClick={() => {
                  document.querySelector(".Press").click();
                }}
              >
                Student
              </button>
              <button
                onClick={() => {
                  document.querySelector(".guest").click();
                }}
              >
                I'm a guest
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link to="/main" className="main"></Link>
      <Link to="/login" className="Press"></Link>
      <Link to="/guest" className="guest"></Link>
     
    </>
  );
};
