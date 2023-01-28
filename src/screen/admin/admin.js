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
import Button from '@mui/material/Button';
import {  useDispatch,useSelector  } from 'react-redux';
import { rooms } from "../../cache/umapRoom";

export const Admin = ({navigation}) => {

  const roomses = useSelector(rooms)
  const [room, setRoom] = useState("");
  const [roomIDs, setroomIDs] = useState(["",""]);


  const [title, setTitle] = useState("");
  const [clicked, setclicked] = useState(true);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [roomdb, setroomdb] = useState([]);
  
  const [roomName, setroomName] = useState("");
  const [buildingNumber, setbuildingNumber] = useState("");
  const [floorNumber, setfloorNumber] = useState("");
  const [blockNumber, setblockNumber] = useState("");
  const [roomType, setroomType] = useState("");
 






  const [EventChoice,setEventChoice] = useState(["table-box-hide",""])
  const [UserChoice,setUserChoice] =useState(["table-box-hide",""])
  const [UserRequestChoice,setUserRequestChoice] = useState(["table-box","active-option"])
  const [GenerateReport,setGenerateReport] = useState(["table-box-hide",""])
  const [RoomGUI,setRoomGUI] = useState(["table-box-hide",""])

  useEffect(() => {
    getEvent();
    getUsers();
    getRoomsAdmin()
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


  function getRoomsAdmin() {
    axios
      .get("http://localhost/umap-server/getRoomsAdmin.php")
      .then(function (response) {
        setroomdb(response.data);
      });
  }
  function removeRomve(roomid) {
    console.log(roomid)
    console.log(typeof roomid)
    let fData = new FormData();
    fData.append("roomID", roomid);
    axios
      .post("http://localhost/umap-server/removeRoom.php", fData)
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
          setRoomGUI(["table-box-hide",""])
          break;

        case 1:
          setEventChoice(["table-box-hide",""] )
          setUserChoice(["table-box","active-option"])
          setUserRequestChoice(["table-box-hide",""])
          setGenerateReport(["table-box-hide",""])
          setRoomGUI(["table-box-hide",""])
          break;

        case 2:
          setEventChoice(["table-box-hide",""])
          setUserChoice(["table-box-hide",""])
          setUserRequestChoice(["table-box","active-option"])
          console.log(UserRequestChoice[1])
          setGenerateReport(["table-box-hide",""])
          setRoomGUI(["table-box-hide",""])
          break;
        case 3:
        setEventChoice(["table-box-hide",""])
        setUserChoice(["table-box-hide",""])
        setUserRequestChoice(["table-box-hide",""])
        setGenerateReport(["table-box","active-option"])
        setRoomGUI(["table-box-hide",""])
        break;
        case 4:
        setEventChoice(["table-box-hide",""])
        setUserChoice(["table-box-hide",""])
        setUserRequestChoice(["table-box-hide",""])
        setGenerateReport(["table-box-hide",""])
        setRoomGUI(["table-box","active-option"])
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
              onClick={() => {
                pageChoice(0);
              }}
            >
              Events
            </h1>
            <span>/</span>

            <h1
              className={`opt ${UserChoice[1]}`}
              onClick={() => {
                pageChoice(1);
              }}
            >
              User
            </h1>
            <span>/</span>

            <h1
              className={`opt ${UserRequestChoice[1]}`}
              onClick={() => {
                pageChoice(2);
              }}
            >
              User Request
            </h1>
            <span>/</span>

            <h1
              className={`opt ${GenerateReport[1]}`}
              onClick={() => {
                pageChoice(3);
              }}
            >
              Generate Report
            </h1>
            <span>/</span>

            <h1
              className={`opt ${RoomGUI[1]}`}
              onClick={() => {
                pageChoice(4);
              }}
            >
              Room GUI
            </h1>
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
                        <div className="sbottom ">
                          {" "}
                          {roomses[0]
                            .filter(
                              (z) =>
                                z.roomID == event.locationID.split(" ").join("")
                            )
                            .map((e) => e.roomName)}
                        </div>
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
                  {users
                    .filter((e) => e.UserType === "not-u")
                    .map((user) => (
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

              <div className={`${UserChoice[0]} table2 `}>
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
                  {users
                    .filter((e) => e.UserType === "user")
                    .map((user) => (
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

              <div className={`${GenerateReport[0]} table3 `}>
                <Button variant="outlined"
                onClick={() => {
                  document.querySelector(".reportDay").click();
                }}
                
                >daily Report</Button>
                <Button variant="outlined">weekly Report</Button>

                <Button
                  variant="contained"
                  onClick={() => {
                    document.querySelector(".reportMonth").click();
                  }}
                >
                  Monthly Report
                </Button>
              </div>

              <div
                className={`${RoomGUI[0]} table3 `}
                style={{ flexDirection: "column" }}
              >
                <h2 style={{margin:0,color:"#FDB417"}}>{`${roomIDs[0] } ${roomIDs[1] }`}</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Room Name</th>
                      <th>Building On</th>
                      <th>Floor</th>
                      <th>Block</th>
                      <th>Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr>
                      <td>
                        <input type="text" value={roomName} onChange={
                          (e)=>{
                            setroomName(e.target.value)
                          }
                          } placeholder="Room Name" />{" "}
                      </td>
                      <td>
                        <input type="text"  value={buildingNumber} onChange={
                          (e)=>{
                            setbuildingNumber(e.target.value)
                          }
                        } placeholder="Building Number On" />{" "}
                      </td>
                      <td>
                        <input type="text"  value={floorNumber} onChange={
                          (e)=>{
                            setfloorNumber(e.target.value)
                          }
                        }  placeholder="Floor" />{" "}
                      </td>
                      <td>
                        <input type="text" value={blockNumber} onChange={
                          (e)=>{
                            setblockNumber(e.target.value)
                          }
                        }  placeholder="Block" />{" "}
                      </td>
                      <td>
                        <input type="text" value={roomType} onChange={
                          (e)=>{
                            setroomType(e.target.value)
                          }
                        }   placeholder="Type" />{" "}
                      </td>
                      <td className="table-actions">
                        <button
                          class="button-6"
                          role="button"
                          onClick={() => {
                            const url = "http://localhost/umap-server/addRoom.php";
                            
                              let fData = new FormData();
                              
                              fData.append("roomName", `${roomName}`);
                              fData.append("buildingNumber", `${buildingNumber}`);
                              fData.append("floorNumber", `${floorNumber}`);
                              fData.append("blockNumber", `${blockNumber}`);
                              fData.append("roomType", `${roomType}`);
                              axios
                                .post(url, fData).then(()=>{
                                  setroomName("")
                                  setbuildingNumber("")
                                  setfloorNumber("")
                                  setblockNumber("")
                                  setroomType("")
                                })
                          }}
                        >
                          Add
                        </button>


                        <button
                          class="button-6"
                          role="button"
                          onClick={() => {
                            
                              const url = "http://localhost/umap-server/updateRoom.php";
                              
                              if(roomIDs[1]!=""){
                                  let fData = new FormData();
                                  fData.append("roomID",roomIDs[1])
                                  fData.append("roomName", `${roomName}`);
                                  fData.append("buildingNumber", `${buildingNumber}`);
                                  fData.append("floorNumber", `${floorNumber}`);
                                  fData.append("blockNumber", `${blockNumber}`);
                                  fData.append("roomType", `${roomType}`);
                                  axios
                                    .post(url, fData).then(()=>{
                                      setroomName("")
                                      setbuildingNumber("")
                                      setfloorNumber("")
                                      setblockNumber("")
                                      setroomType("")
                                      setroomIDs( ["", ""])
                                      window.location.reload();
                                    })
                              }else{
                                alert("Please Select a room to update!")
                              }
                          }}
                        >
                          Update
                        </button>


                        <button
                          class="button-6"
                          role="button"
                          onClick={() => {
                            
                           
                                  
                               
                                  setroomName("")
                                  setbuildingNumber("")
                                  setfloorNumber("")
                                  setblockNumber("")
                                  setroomType("")
                                  setroomIDs( ["", ""])
                                
                          }}
                        >
                          Clear
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Room Name</th>
                      <th>Building On</th>
                      <th>Floor</th>
                      <th>Block</th>
                      <th>Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {roomdb.map((room) => (
                    <tbody>
                      <tr>
                        <td>{room.roomID}</td>
                        <td>{room.roomName}</td>
                        <td>{room.buildingNumber}</td>
                        <td>{room.floorNumber}</td>
                        <td>{room.blockNumber}</td>
                        <td>{room.roomType}</td>
                        <td className="table-actions">
                          <button
                            class="button-6"
                            role="button"
                            onClick={() => {
                              setroomIDs( ["Editing room:", room.roomID])

                              setroomName(room.roomName)
                              setbuildingNumber(room.buildingNumber)
                              setfloorNumber(room.floorNumber)
                              setblockNumber(room.blockNumber)
                              setroomType(room.roomType)
                            }}
                          >
                            Edit
                          </button>

                          <button
                            class="button-6"
                            role="button"
                            onClick={() => {
                              removeRomve(room.roomID)
                            }}
                          >
                            Delete
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
        <Link to="/reportDay" className="reportDay" target="_blank"></Link>
        <Link to="/reportMonth" className="reportMonth" target="_blank"></Link>
        <Link to="/admin" className="admin"></Link>
      </div>
    </>
  );
};
