import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Float,
} from "@react-three/drei";
import { useState } from "react";
import { Map } from "./Map";
import { Navbar3 } from "../../components/navbar/navbar3";
import { Location } from "./Location";

import Map2d from "./../../media/image/2dmapc.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Cloud1 from "./../../media/image/cloud_2-big.png";
import "./main.css";

import { Load } from "../loader/loader";
import { useSelector } from "react-redux";

import { searchs } from "../../cache/userSearch";
import { SearchOffline } from "../../components/search/searchForOffline";
function Guest() {

  const searches = useSelector(searchs);

  const [mapzoom, setmapzoom] = useState(40);




  return (
    <>
      <Load  />

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
            <TransformWrapper>
                <TransformComponent>
                  <img src={Map2d} alt="" />
                </TransformComponent>
              </TransformWrapper>
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
              
              

                
                <Map />
               
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
