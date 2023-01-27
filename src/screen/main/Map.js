import { useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Load } from '../loader/loader';
export function Map() {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/PartialMap.glb");

  return (
    

   
    <primitive object={gltf.scene}
   
    /> 
  )
}
