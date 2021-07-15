import useStore from '@/helpers/store'
import { A11y, useA11y, A11yTag } from '@react-three/a11y'
import { useFrame } from '@react-three/fiber'
import { ContactShadows, Text } from '@react-three/drei'
import { useRef, useState, Suspense } from 'react'
import Pokeball from './Poke_demo'

const Green = ({position, ...props}) => {

  const a11y = useA11y()

  return (
    <Text 
    position={position}
    outlineWidth={a11y.focus || a11y.hover ? 0.04 : 0}
    outlineColor="#ffffff"
    rotation={[0,Math.PI/6,0]} fontSize={0.3} curveRadius={3} font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"  anchorX="center" anchorY="middle">
    <meshStandardMaterial
          roughness={0.2}
          metalness={0}
          flatShading={false}
          emissive={"#004400"}
          color={"#004400"}
        />
      GREEN BALL
    </Text>
  )
}
const Red = ({position, ...props}) => {

  const a11y = useA11y()

  return (
    <Text 
    position={position}
    outlineWidth={a11y.focus || a11y.hover ? 0.04 : 0}
    outlineColor="#ffffff"
     fontSize={0.3} curveRadius={3} font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"  anchorX="center" anchorY="middle">
    <meshStandardMaterial
          roughness={0.2}
          metalness={0}
          flatShading={false}
          emissive={"#cc0000"}
          color={"#cc0000"}
        />
      RED BALL
    </Text>
  )
}
const Black = ({position, ...props}) => {

  const a11y = useA11y()

  return (
    <Text position={position}
    outlineWidth={a11y.focus || a11y.hover ? 0.04 : 0}
    outlineColor="#ffffff" rotation={[0,-Math.PI/6,0]} fontSize={0.3} curveRadius={3} font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"  anchorX="center" anchorY="middle">
    <meshStandardMaterial
          roughness={0.2}
          metalness={0}
          flatShading={false}
          emissive={"#000000"}
          color={"#000000"}
        />
      BLACK BALL
    </Text>
  )
}

const BoxComponent = ({ route, children }) => {
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
    <A11yTag tag="header">
    <A11yTag tag="nav">
    <A11yTag tag="ul">
    <A11y
      role='link'
      href={'/'}
      tag='li'
      actionCall={() => {
        router.push('/')
      }}
    >
      <Green  position={[-2,2.2,0]} />
    </A11y>
    
    <A11y
      role='link'
      href={'/red'}
      tag='li'
      actionCall={() => {
        router.push('/red')
      }}
    >
      <Red position={[0,2.2,-0.5]} />
    </A11y>
    <A11y
      role='link'
      href={'/black'}
      tag='li'
      actionCall={() => {
        router.push('/black')
      }}
    >
      <Black position={[2,2.2,0]} />
    </A11y>
    </A11yTag>
    </A11yTag>
    </A11yTag>
      {children}
    <ContactShadows rotation-x={Math.PI / 2} position={[0, -3, 0]} opacity={0.4} width={30} height={30} blur={1} far={15} />
    </>
  )
}
export default BoxComponent
