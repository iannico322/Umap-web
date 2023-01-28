import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { Map } from "./Map";
import { Navbar3 } from "../../components/navbar/navbar3";
import { Location } from "./Location";

import Map2d from "./../../media/image/2dmapc.jpg";
import Draggable from "react-draggable";
import Cloud1 from "./../../media/image/cloud_2-big.png";
import "./main.css";
import { Cloud } from "./Cloud";

import { Search } from "../../components/search/search";

import { Load } from "../loader/loader";
import { useSelector, useDispatch } from "react-redux";
import { users } from "./../../cache/userCredentials";
import { searchs,addSearch } from "../../cache/userSearch";
import { SearchOffline } from "../../components/search/searchForOffline";
function Guest() {

  const searches = useSelector(searchs);

  const [mapzoom, setmapzoom] = useState(40);
  const [loc, setloc] = useState("");



  const [loading, setLoading] = useState("");

  useEffect(() => {
    const onPageLoad = () => {
      setLoading("hide");
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      <Load load={loading} />

      <div className="main-screen">
        <div className="page">
          <div className="cloud-model-login  main-cloud">
            <img src={Cloud1} alt="" />
          </div>
        </div>

        <div className="canva">
          <Navbar3 />

          <div className="search">
            <SearchOffline 
              
              userID="69"
            />
          </div>

          <div className="map2d-option">
            <div className="btns">
              <div
                onClick={() => {
                  setmapzoom(mapzoom - 1);
                }}
              >
                +
              </div>
              <div
                onClick={() => {
                  setmapzoom(mapzoom + 1);
                }}
              >
                -
              </div>
            </div>
            <div className="map2d-con">
              <Draggable>
                <img src={Map2d} alt="" />
              </Draggable>
            </div>
          </div>

          <Canvas>
            
              <Environment
                files={process.env.PUBLIC_URL + "/textures/light.hdr"}
              />

              <PerspectiveCamera
                makeDefault
                fov={mapzoom}
                position={[400, 0, -5]}
              />

              <OrbitControls
                target={[0, 0, 10]}
                maxPolarAngle={Math.PI * 0.4}
              />

              <Float
                speed={0.9}
                position={[0, 0, 0]}
                rotationIntensity={0.6}
                floatIntensity={0.6}
              >
                <Cloud />
                <Suspense fallback={<>Loading</>}>

                
                <Map />
                </Suspense>
                <Location
                 loc= {searches.location}
                 search= {searches.buildingID}
                 roomSearch = {searches.room}
                 floor = {searches.floor}
                 block = {searches.block}

                />
              </Float>
         
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default Guest;
