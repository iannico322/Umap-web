import React, { useEffect, useState } from "react";
import { Navbar3 } from "../../components/navbar/navbar3";
import Plus from "../../media/image/+.png";
import Ex from "../../media/image/x-icon.svg";
import bgImage from "../../media/image/ustp.png";
import axios from "axios";
import { Search2 } from "../../components/search/search2";
import "./admin.css";
import "./button6.css";
import { Link } from "react-router-dom";

import {  useDispatch,useSelector  } from 'react-redux';
import { rooms } from "../../cache/umapRoom";

export const Admin = () => {

  const roomses = useSelector(rooms)
  const [room, setRoom] = useState("");

  const [title, setTitle] = useState("");
  const [clicked, setclicked] = useState(true);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [choiceCon,setChoiceCon] = useState("table-box")



  const [EventChoice,setEventChoice] = useState(["table-box-hide",""])
  const [UserChoice,setUserChoice] =useState(["table-box-hide",""])
  const [UserRequestChoice,setUserRequestChoice] = useState(["table-box","active-option"])
  const [GenerateReport,setGenerateReport] = useState(["table-box-hide",""])


  useEffect(() => {
    getEvent();
    getUsers();
    console.log(events);
    console.log(users);
  }, []);

  function getEvent() {
    axios
      .get("http://localhost/umap-server/displayEvents.php")
      .then(function (response) {
        setEvents(response.data);
      });
  }

  function getUsers() {
    axios
      .get("http://localhost/umap-server/displayUsers.php")
      .then(function (response) {
        setUsers(response.data);
      });
  }

  function convertTimeFormat(time) {
    let hours = parseInt(time.split(":")[0]);
    let minutes = time.split(":")[1];
    let ampm = "am";

    if (hours === 0) {
      hours = 12;
    } else if (hours > 12) {
      hours = hours - 12;
      ampm = "pm";
    }
    return `${hours}:${minutes}${ampm}`;
  }

  function showForm() {
    let ambot = document.querySelector(".schedule-container");

    if (clicked) {
      ambot.style.opacity = "1";
      ambot.style.pointerEvents = "all";
      setclicked(false);
    } else {
      ambot.style.opacity = "0";
      ambot.style.pointerEvents = "none";
      setclicked(true);
    }
  }
  const Destination = (newQuery) => {
    console.log("itworks");
    setRoom(newQuery); // update the search query with the new value
  };

  function acceptUser(user) {
    console.log(user);
    let fData = new FormData();
    fData.append("userid", user);
    axios
      .post("http://localhost/umap-server/acceptUser.php", fData)
      .then(function (response) {
        window.location.reload();
      });
  }

  function banUser(user) {
    console.log(user);
    let fData = new FormData();
    fData.append("userid", user);
    axios
      .post("http://localhost/umap-server/banUser.php", fData)
      .then(function (response) {
        window.location.reload();
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost/umap-server/events.php";

    let fData = new FormData();
    fData.append("location", room);
    fData.append("title", title);
    fData.append(
      "time",
      `${convertTimeFormat(startTime)} - ${convertTimeFormat(endTime)} `
    );
    fData.append("date", date);
    axios
      .post(url, fData)
      .then((response) => {
        console.log(response.data);
        if (response.data === "Success!") {
          setEndTime("");
          setStartTime("");
          setRoom("");
          setTitle("");
          setDate("");
          setclicked(false);
          window.location.reload();
        }
      })
      .catch((error) => alert(error));
  }

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


  const pageChoice = (e)=>{
      switch (e) {
        case 0:
          setEventChoice(["table-box","active-option"])
          setUserChoice(["table-box-hide",""])
          setUserRequestChoice(["table-box-hide",""])
          setGenerateReport(["table-box-hide",""])
          break;

        case 1:
          setEventChoice(["table-box-hide",""] )
          setUserChoice(["table-box","active-option"])
          setUserRequestChoice(["table-box-hide",""])
          setGenerateReport(["table-box-hide",""])
          break;

        case 2:
          setEventChoice(["table-box-hide",""])
          setUserChoice(["table-box-hide",""])
          setUserRequestChoice(["table-box","active-option"])
          console.log(UserRequestChoice[1])
          setGenerateReport(["table-box-hide",""])
          break;
        case 3:
        setEventChoice(["table-box-hide",""])
        setUserChoice(["table-box-hide",""])
        setUserRequestChoice(["table-box-hide",""])
        setGenerateReport(["table-box","active-option"])
        break;
      
        default:
          break;
      }
  }







  return (
    <>
      <div className="schedule-container">
        <div className="form-con">
          <div className="header-con">
            <div>
              <h1>Set Event</h1>
              <img
                src={Ex}
                alt=""
                onClick={() => {
                  console.log("out");
                  showForm();
                }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="room-loc">
              <div>
                <p>Event title:</p>
                <input
                  type="text"
                  placeholder="Event Title"
                  value={title}
                  required
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>

              <p>Location</p>
              <Search2 onDistination={Destination} />
            </div>

            <div className="day">
              <p> Date : </p>
              <input
                required
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="time">
              <p className="time-title">Time duration</p>
              <div className="time-inputs">
                <div>
                  <p>Start</p>

                  <input
                    type="time"
                    required
                    value={startTime}
                    onChange={(e) => {
                      setStartTime(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <p>End</p>
                  <input
                    type="time"
                    value={endTime}
                    required
                    onChange={(e) => {
                      setEndTime(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-schedule">
              Submit
            </button>
          </form>
        </div>
      </div>







      <div className="admin-profile-container">
        <Navbar3 />

        <div className="admin-profile-background-admin">
          <img src={bgImage} alt="" />
        </div>

        
        <div className="admin-profile">
          <h1>Admin Panel</h1>
          <button>Edit</button>
        </div>


                 
        <div className="admin-options">
          <div className="options-box">

            
              <h1
              className={`opt ${EventChoice[1]}`}
              onClick={()=>{pageChoice(0) }}
              >Events</h1>
              <span>/</span>

              <h1
              className={`opt ${UserChoice[1]}`}
              onClick={()=>{pageChoice(1) }}
              >User</h1>
              <span>/</span>

              <h1
              className={`opt ${UserRequestChoice[1]}`}
              onClick={()=>{pageChoice(2) }}
              >User Request</h1>
              <span>/</span>

              <h1
              className={`opt ${GenerateReport[1]}`}
              onClick={()=>{pageChoice(3) }}
              >Generate Report</h1>
              <span>/</span>
          </div>
              
        </div>


        <div className="admin-account-container">
          <div className="admin-account-box">
            

            <div className="page-choices">
              <div className={`${EventChoice[0]}  admin-reminder-container`}>
             
          <div className="admin-reminder-box">
            <div
              className="add card"
              onClick={() => {
                showForm();
              }}
            >
              <img src={Plus} alt="Plus-icon" />
            </div>
            {events.map((event, key) => (
              <div className="card-admin ">
                <div className="room-con-admin ">
                  <div className="stop">{event.title}</div>
                  {console.log("hi")}

                  <div className="sbottom "> {roomses[0].filter(z=>z.roomID == event.locationID.split(" ").join("")).map(e=>e.roomName)}</div>
                </div>

                <div className="date-con">
                  <div className="date">{dateFormat(event.date)}</div>
                  <div className="time">{event.time}</div>
                </div>
              </div>
            ))}
          </div>
      


              </div>


              <div className={`${UserRequestChoice[0]} table1 `}>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {users.filter(e=>e.UserType === "not-u").map((user) => (
                    <tbody>
                      <tr>
                        <td>{user.ID}</td>
                        <td>{user.FullName}</td>
                        <td>{user.Email}</td>
                        <td>{user.password}</td>

                        <td>{user.UserType}</td>
                        <td className="table-actions">
                          <button
                            class="button-6"
                            role="button"
                            onClick={() => {
                              acceptUser(user.ID);
                            }}
                          >
                            Accept
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>



              <div  className={`${UserChoice[0]} table2 `}>
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {users.filter(e=>e.UserType === "user").map((user) => (
                    <tbody>
                      <tr>
                        <td>{user.ID}</td>
                        <td>{user.FullName}</td>
                        <td>{user.Email}</td>
                        <td>{user.password}</td>

                        <td>{user.UserType}</td>
                        <td className="table-actions">
                          <button
                            class="button-6"
                            role="button"
                            onClick={() => {
                              banUser(user.ID);
                            }}
                          >
                            Ban
                          </button>

                          <button
                            class="button-6"
                            role="button"
                            onClick={() => {
                              acceptUser(user.ID);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>








            </div>
          </div>
        </div>
        
        <Link to="/admin" className="admin"></Link>
      </div>
    </>
  );
};
