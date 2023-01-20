import { useLoader } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Cloud() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/cloud.glb"
  );

  return (
    <Float position={[10, -15, -60]} floatIntensity={50}>
      <primitive object={gltf.scene} scale={[20, 20, 20]} />
    </Float>
  );
}
