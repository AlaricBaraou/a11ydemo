import useStore from '@/helpers/store'
import { A11y } from '@react-three/a11y'
import { useFrame } from '@react-three/fiber'
import { ContactShadows, Text } from '@react-three/drei'
import { useRef, useState, Suspense } from 'react'
import Pokeball from './Poke_demo'

const BoxComponent = ({ route }) => {
  const router = useStore((s) => s.router)
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
  )
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
    {/* <A11y
      role='link'
      href={route}
      actionCall={() => {
        router.push(route)
      }}
    >
      <mesh
        ref={mesh}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color={hovered ? 'hotpink' : route === '/' ? 'darkgrey' : 'orange'}
        />
      </mesh>
    </A11y> */}
    <Text position={[-2,2.2,0]} rotation={[0,Math.PI/6,0]} fontSize={0.3} curveRadius={3} font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"  anchorX="center" anchorY="middle">
    <meshStandardMaterial
          roughness={0.2}
          metalness={0}
          flatShading={false}
          emissive={"#004400"}
          color={"#004400"}
        />
      GREEN BALL
    </Text>
    <Text position={[0,2.2,-0.5]} fontSize={0.3} curveRadius={3} font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"  anchorX="center" anchorY="middle">
    <meshStandardMaterial
          roughness={0.2}
          metalness={0}
          flatShading={false}
          emissive={"#cc0000"}
          color={"#cc0000"}
        />
      RED BALL
    </Text>
    <Text position={[2,2.2,0]} rotation={[0,-Math.PI/6,0]} fontSize={0.3} curveRadius={3} font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"  anchorX="center" anchorY="middle">
    <meshStandardMaterial
          roughness={0.2}
          metalness={0}
          flatShading={false}
          emissive={"#000000"}
          color={"#000000"}
        />
      BLACK BALL
    </Text>
    <Suspense>
      <Pokeball position={[0,-1,-1]} scale={[0.5,0.5,0.5]} rotation={[0,Math.PI,0]} />
    </Suspense>
    <ContactShadows rotation-x={Math.PI / 2} position={[0, -3, 0]} opacity={0.4} width={30} height={30} blur={1} far={15} />
    </>
  )
}
export default BoxComponent
