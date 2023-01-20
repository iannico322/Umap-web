import { useLoader, useFrame } from "@react-three/fiber";
import { Text3D, Float } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useState } from "react";

export function Location(props) {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/location.gltf"
  );

  const [title, setTitle] = useState("");
  const [discription, setdiscription] = useState();

  let buildingName = ["9", "23", "16", "3", "4", "5","14","16"];
  const direction = useRef(null);

  useFrame((state) => {
    direction.current.position.x = 10;
    direction.current.position.y = 10;
    direction.current.position.z = -0;
    direction.current.rotation.set(0, -0.5, 0);
    setTitle(props.roomSearch);

    switch (props.search) {
      

      
      case "3":
        direction.current.position.x = -34.3;
        direction.current.position.y = 6;
        direction.current.position.z = -53.2;
        direction.current.rotation.set(0, 1.44, 0);
        setTitle(props.roomSearch);
        setdiscription(
          `Integrated Technology Building | ${props.floor} : ${props.block}`
        );

        break;
      case "4":
        direction.current.position.x = -24.3;
        direction.current.position.y = 2;
        direction.current.position.z = -49.2;
        direction.current.rotation.set(0, 1.44, 0);
        setTitle(props.roomSearch);
        setdiscription(`ROTC Building | ${props.floor} : ${props.block}`);

        break;

      case "5":
        direction.current.position.x = -18.3;
        direction.current.position.y = 4;
        direction.current.position.z = -33.2;
        direction.current.rotation.set(0, 1.44, 0);
        setTitle(props.roomSearch);
        setdiscription(`Old Engineering Building | ${props.floor} : ${props.block}`);

        break;

      case "9":
        direction.current.position.x = -28.8;
        direction.current.position.y = 8;
        direction.current.position.z = -30.2;
        direction.current.rotation.set(0, 1.44, 0);
        setTitle(props.roomSearch);
        setdiscription(`CITC Building | ${props.floor} : ${props.block}`);

        break;  
      case "14":
        direction.current.position.x = -26.3;
        direction.current.position.y = 7;
        direction.current.position.z = -1.2;
        direction.current.rotation.set(0, 1.44, 0);
          setTitle(props.roomSearch);
          setdiscription(`Finance and Accounting Building | ${props.floor} : ${props.block}`);
  
          break;
      case "16":
        direction.current.position.x = -10;
        direction.current.position.y = 8;
        direction.current.position.z = 1;
        direction.current.rotation.set(0, 1.4, 0);
        setTitle(props.roomSearch);
        setdiscription(`DRER Memorial Hall | ${props.floor} : ${props.block}`);

        break;
      case "19":
        direction.current.position.x = 13
        direction.current.position.y =4
        direction.current.position.z = -26
        direction.current.rotation.set(0,1.44,0)
        setTitle(props.roomSearch);
        setdiscription(`Science Centrum Building | ${props.floor} : ${props.block}`);

          break; 
          
          case "20":
            direction.current.position.x = 15.2;
        direction.current.position.y = 8;
        direction.current.position.z = -11;
        direction.current.rotation.set(0, 1.34, 0);

          setTitle(props.roomSearch);
          setdiscription(`Cafeteria| ${props.floor} : ${props.block}`);
  
          break;      
        
        
        case "23":
          direction.current.position.x = -29;
          direction.current.position.y = 7;
          direction.current.position.z = 45;
          direction.current.rotation.set(0, 1.4, 0);
          setTitle(props.roomSearch);
          setdiscription(`LRC | ${props.floor} : ${props.block}`);
  
          break;
          case "24":
            direction.current.position.x = -10.4;
            direction.current.position.y = 5;
            direction.current.position.z = 55.5;
            direction.current.rotation.set(0, 1.84, 0);
    
            setTitle(props.roomSearch);
            setdiscription(`Food Trade Building | ${props.floor} : ${props.block}`);
    
            break;
            case "25":
              direction.current.position.x = -14.4;
              direction.current.position.y = 5;
              direction.current.position.z = 37.5;
              direction.current.rotation.set(0, 1.84, 0);
              setTitle(props.roomSearch);
              setdiscription(`Food Innovation Center | ${props.floor} : ${props.block}`);
      
              break;
              
              case "28":
                direction.current.position.x = -4.2;
        direction.current.position.y = 5;
        direction.current.position.z = 30.5;
        direction.current.rotation.set(0, 1.84, 0);
                setTitle(props.roomSearch);
                setdiscription(`Old Science Building | ${props.floor} : ${props.block}`);
        
                break;
                
                case "36":
                  direction.current.position.x = -1.2;
                  direction.current.position.y = 5;
                  direction.current.position.z = 63.6;
                  direction.current.rotation.set(0, 1.84, 0);
                setTitle(props.roomSearch);
                setdiscription(`Old Student Center| ${props.floor} : ${props.block}`);
        
                break;
                case "41":
                  direction.current.position.x = 6.2;
                  direction.current.position.y = 7;
                  direction.current.position.z = 20.6;
                  direction.current.rotation.set(0, 1.84, 0);
                setTitle(props.roomSearch);
                setdiscription(`Science Complex| ${props.floor} : ${props.block}`);
        
                break;   

      default:
        
        direction.current.position.x = 33
        direction.current.position.y =0
        direction.current.position.z = -46
        direction.current.rotation.set(0,1.44,0)
        setTitle("USTP MAP");
        setdiscription("Developed By College Cheetah");

        break;
    }
  });

  return (
    <Float ref={direction} rotationIntensity={0} floatIntensity={0}>
      <Float
        position={[5.5, 5.5, -1.6]}
        rotation={[0, 0.22, 0]}
        rotationIntensity={0}
        floatIntensity={0}
      >
        <Float
          position={[0.1, 3.4, 0]}
          rotationIntensity={0}
          floatIntensity={0}
        >
          <Text3D
            font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
            size={1.4}
            height={0.065}
            curveSegments={12}
          >
            {props.loc}
            <meshStandardMaterial color="#000000" />
          </Text3D>
        </Float>

        <Text3D
          font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
          size={2.6}
          curveSegments={12}
        >
          {title}
          <meshStandardMaterial color="#fbbc05" />
        </Text3D>
        <Float
          position={[0.2, -2.2, 0]}
          rotationIntensity={0}
          floatIntensity={0}
        >
          <Text3D
            font={process.env.PUBLIC_URL + "/fonts/Roboto_Regular.json"}
            size={1.3}
            height={0.065}
            curveSegments={12}
          >
            {discription}
            <meshStandardMaterial color="#34434c" />
          </Text3D>
        </Float>
      </Float>

      <primitive object={gltf.scene} rotation={[0, 0.2, 0]} scale={[5, 5, 5]} />
    </Float>
  );
}
