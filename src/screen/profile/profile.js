import React, { useEffect, useState } from "react";
import { Navbar2 } from "../../components/navbar/navbar2";
import Plus from "../../media/image/+.png";
import Ex from "../../media/image/x-icon.svg";
import bgImage from "../../media/image/Group 274.png";
import "./profile.css";
import { Search2 } from "../../components/search/search2";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { users } from "./../../cache/userCredentials";

import { rooms } from "../../components/search/rooms";

export const Profile = () => {

  const credentials = useSelector(users);
  const [room, setRoom] = useState("");

  const [title, setTitle] = useState("");
  const [clicked, setclicked] = useState(true);
  const [dates, setDate] = useState("MON");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    if (credentials[0] === undefined) {
  
      document.querySelector(".login").click();
    } else {
      
    }


    getScheduleForProfile();
    



  }, []);

  function getScheduleForProfile() {
    let fData = new FormData();
    fData.append("userid", credentials[0]);
    axios
      .post("http://localhost/umap-server/getschedules.php", fData)
      .then(function (response) {
        console.log(typeof response.data);
        if (response.data === "NoSchedules") {
        } else {
          setSchedules(response.data);
          
        }
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

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost/umap-server/schedule.php";

    let fData = new FormData();
    fData.append("userid", credentials[0]);
    fData.append("roomid", room);
    fData.append("title", title);
    fData.append(
      "time",
      `${convertTimeFormat(startTime)} - ${convertTimeFormat(endTime)} `
    );
    fData.append("date", dates);
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
          window.location.reload();
        }
      })
      .catch((error) => alert(error));
  }

  
  return (
    <>
      <div className="schedule-container">
        <div className="form-con">
          <div className="header-con">
            <div>
              <h1>Set Schedule</h1>
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
              <p>Distination</p>
              <Search2 onDistination={Destination} />

              <p>Schedule Title</p>
              <input
                type="text"
                placeholder="Schedule title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div className="day">
              <p> Day? </p>
              <select
                required
                value={dates}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              >
                <option value="MON" selected>MON</option>
                <option value="TUE">TUE</option>
                <option value="WED">WED</option>
                <option value="THU">THU</option>
                <option value="FRI">FRI</option>
                <option value="SAT">SAT</option>
                <option value="SUN">SUN</option>
              </select>
            </div>

            <div className="time">
              <p className="time-title">Time duration</p>
              <div className="time-inputs">

                <div>
                  <p>Start</p> <input
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


      {/* //profile screen z-index 1 */}
     <div className="profile-container  animate__animated  animate__bounceInLeft">
        <Navbar2 profile="selected" />

        <div className="profile-background">
          <img src={bgImage} alt="" />
        </div>

        <div className="profile">
          <h1>{credentials[1]}</h1>
          <button>Edit</button>
        </div>

        {/* //reminder space */}
        <div className="reminder-container">
          <div className="reminder-box">
            <div
              className="add card"
              onClick={() => {
                showForm();
              }}
            >
              <img src={Plus} alt="Plus-icon" />
            </div>
            {schedules.map((event, key) => (
              <div className="card">
                <div className="room-con ">
                  <div className="stop">
                    {rooms
                      .filter((z) => z.roomID == event.roomID)
                      .map((e) => e.roomName)}
                  </div>

                  <div className="sbottom "> {event.title}</div>
                </div>

                <div className="date-con">
                  <div className="date">{event.date}</div>
                  <div className="time">{event.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>



        <Link to="/umap" className="login"></Link>
      </div>
    </>
  );
};
