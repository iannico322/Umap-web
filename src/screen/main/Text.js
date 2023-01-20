import { useThree, extend } from 'react-three-fiber'
import { Text } from 'three/examples/jsm/text/Text'

extend({ Text })

function ThreeDText({ text, font, size, ...props }) {
  const { camera } = useThree()

  return (
    <float {...props}>
      <text position={camera.position}>
        <textGeometry attach="geometry" args={[text, { font, size }]} />
        <meshBasicMaterial attach="material" color="white" />
        <mesh />
      </text>
    </float>
  )
}