import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,} from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { Map } from "./Map";
import { Navbar2 } from "../../components/navbar/navbar2";
import { Location } from "./Location";
import Map2d from "./../../media/image/2dmapc.jpg";
import Cloud1 from "./../../media/image/cloud_2-big.png";
import "./main.css";
import { Cloud } from "./Cloud";
import { Card } from "../../components/card/card";
import { Card2 } from "../../components/card/card2";
import { Search } from "../../components/search/search";
import ArrowForward from "../../media/image/arrow_forward.svg";
import ArrowBackward from "../../media/image/arrow_back.svg";
import { Load } from "../loader/loader";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { users } from "./../../cache/userCredentials";
import { searchs,addSearch } from "../../cache/userSearch";
import { rooms } from "../../cache/umapRoom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function MainDasboard() {
  const dispatch = useDispatch();
  const credentials = useSelector(users);
  const searches = useSelector(searchs);
  const roomses = useSelector(rooms);

  const [timer, settimer] = useState(1000);
  const [todayDay, setTodayDay] = useState('');

  
  const [mapzoom,setmapzoom] = useState(40)

  const [dateToday,setdateToday] = useState("")
  const [timeToday,settimeToday] = useState("")

  const [events, setEvents] = useState([]);
  const [schedules, setSchedules] = useState([]);

  const dateFormat = (date) => {
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return `${months[month - 1]} ${day}`;
  };
  
  setTimeout(() => {
    const currentDay = new Date().getDay();
    setTodayDay(['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][currentDay]);
  }, 1000);

 
  
  useEffect(() => {
   
    getEvent();
    getSchedules();

    if (credentials[0] === undefined) {
      settimer(100000000)
      document.querySelector(".login").click();
    } else {
      settimer(9000)
      setInterval(displayDateTime,timer );
    }
    
    
  });

  function getEvent() {
    axios
      .get("http://localhost/umap-server/getEventsToCalendar.php")
      .then(function (response) {
        setEvents(response.data);
      });
  }


  
  function getSchedules() {

    axios
      .get("http://localhost/umap-server/getSchedulesToCalendar.php")
      .then(function (response) {
        setSchedules(response.data);
      });
  }
  const displayDateTime = () => {
    var currentDateAndTime = new Date();
    var month = currentDateAndTime.getMonth();
    var day = currentDateAndTime.getDate();
    var hours = currentDateAndTime.getHours();
    var minutes = currentDateAndTime.getMinutes();
    var monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    var monthName = monthNames[month];
  
    var dateString = monthName + " " + day;
  
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    
  
    var amOrPm = hours < 12 ? "AM" : "PM";
    if (hours > 12) {
      hours -= 12;
    }
    if (hours === 0) {
      hours = 12;
    }
    var timeString = hours + ":" + minutes + " " + amOrPm;
  
    setdateToday(dateString) ;
    settimeToday(timeString) ;
  };
  





  return (
    <>
      <Load time={1000} />
      
      <div className="main-screen  ">
        <div className="page">
          <div className="cloud-model-login  main-cloud">
            <img src={Cloud1} alt="" />
          </div>
        </div>

      {/* //Whole Screen z 1 */}
        <div className="canva">
          <Navbar2 goingTo="selected" />

          <div className="events   ">
            <div className="event  animate__animated  animate__bounceInLeft">
              <div className="box">
                <div
                  className="event-header "
                  onClick={() => {
                    let eventBoard = document.querySelector(".event-container");
                    eventBoard.style.display = "flex";
                    let eventIndicator = document.querySelector(".event");
                    eventIndicator.style.display = "none";
                  }}>
                  <div className="title-text">Events</div>
                  <img
                    src={ArrowForward}
                    className="open-event"
                    alt="arrow-forward"/>
                </div>
              </div>
            </div>


            {/* //Event eventBoard hide */}
            <div className="event-container ">
              <div className="box">
                <div className="event-header">
                  <div className="clock">
                    <div className="todaydate">{dateToday}</div>
                    <div className="todaytime">{timeToday}</div>
                  </div>
                  <div className="title-text">Upcoming Events</div>
                  <img
                    src={ArrowBackward}
                    className="event-arrow"
                    alt="arrow-forward"
                    onClick={() => {
                      let eventIndicator = document.querySelector(".event");
                      eventIndicator.style.display = "flex";

                      let eventBoard =
                        document.querySelector(".event-container");
                      eventBoard.style.display = "none";
                    }}/>
                </div>

                {/* //Event eventBoard show */}
                <div className="event-content">


                  {events.map((event) => (
                    <Card
                      title={event.title}
                      time={event.time}
                      date={dateFormat(event.date)}
                      building=" "
                      onClick={() => {

                        dispatch(addSearch({
                          "location":`| ${roomses[0].filter(z=>z.roomID == event.locationID.split(" ").join("")).map(e=>e.roomName)}`,
                          "buildingID":`${roomses[0].filter(z=>z.roomID == event.locationID.split(" ").join("")).map(e=>e.buildingNumber)}`,
                          "room": `${event.title}`,
                          "floor": dateFormat(event.date),
                          "block": event.time,
                        }))
                        console.log(searches)
                    
                      }}
                      onMouseOver={() => {
                       
                        dispatch(addSearch({
                          "location":`| ${roomses[0].filter(z=>z.roomID == event.locationID.split(" ").join("")).map(e=>e.roomName)}`,
                          "buildingID":`${roomses[0].filter(z=>z.roomID == event.locationID.split(" ").join("")).map(e=>e.buildingNumber)}`,
                          "room": `${event.title}`,
                          "floor": "",
                          "block": "",
                        }))



                      }}
                      onMouseOut={() => {}}
                    />
                  ))}




                  {schedules.filter((e)=> e.date === todayDay).filter(e=>e.userID === credentials[0]).map((sched,key)=>(
                    < Card2 
                      title={sched.title}
                      time={sched.time}
                      date="Today"
                      building=" "
                    
                      onClick={() => {

                        dispatch(addSearch({
                          "location":`| ${roomses[0].filter(z=>z.roomID == sched.roomID).map(e=>e.roomName)}`,
                          "buildingID":`${roomses[0].filter(z=>z.roomID == sched.roomID).map(e=>e.buildingNumber)}`,
                          "room": `${sched.title}`,
                          "floor": dateFormat(sched.date),
                          "block": sched.time,
                        }))
                      }}
                      onMouseOver={()=>{
                        dispatch(addSearch({
                          "location":`| ${roomses[0].filter(z=>z.roomID == sched.roomID).map(e=>e.roomName)}`,
                          "buildingID":`${roomses[0].filter(z=>z.roomID == sched.roomID).map(e=>e.buildingNumber)}`,
                          "room": `${sched.title}`,
                          "floor": dateFormat(sched.date),
                          "block": sched.time,
                        }))
                      }}
                    
                    />


                  ))}


                </div>
              </div>
            </div>
          </div>

          <div className="search">
            <Search/>
          </div>

          <div className="map2d-option">
            <div className="btns">
              <div
                onClick={()=>{
                  setmapzoom(mapzoom - 1)
                }}>
                +
              </div>
              <div
              onClick={()=>{
                   setmapzoom(mapzoom + 1)
              }}>
                -
              </div>

            </div>

            <div className="map2d-con">
              <TransformWrapper>
                <TransformComponent>
                  <img src={Map2d} alt="" />
                </TransformComponent>
              </TransformWrapper>
            </div>
            
          </div>
          
          <Canvas>
            <Suspense fallback={null}>
              <Environment files={process.env.PUBLIC_URL + "/textures/light.hdr"} />

              <PerspectiveCamera
                makeDefault
                fov={mapzoom}
                position={[400, 0, -5]}/>

              <OrbitControls
                target={[0, 0, 10]}
                maxPolarAngle={Math.PI * 0.4}/>

              <Float
                speed={0.9}
                position={[0, 0, 0]}
                rotationIntensity={0.6}
                floatIntensity={0.6}>
                
                <Cloud />
                
                <Map />
                
                <Location
                 loc= {searches.location}
                 search= {searches.buildingID}
                 roomSearch = {searches.room}
                 floor = {searches.floor}
                 block = {searches.block}

                />
              </Float>
              </Suspense>
          </Canvas>
        </div>
        <Link to="/umap" className="login"></Link>
      </div>
    </>
  );
}



export default MainDasboard;
