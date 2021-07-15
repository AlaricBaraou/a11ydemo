import useStore from '@/helpers/store'
import { A11y, useA11y, A11yTag } from '@react-three/a11y'
import { useFrame } from '@react-three/fiber'
import { ContactShadows, Text } from '@react-three/drei'
import { useRef, useState, Suspense } from 'react'
import Pokeball from './Poke_demo'

const Title = ({ position, ...props }) => {
  return (
    <Text
      position={position}
      outlineWidth={0.04}
      outlineColor={'#000000'}
      outlineOpacity={1}
      outlineBlur={0}
      color={'#fecb04'}
      fontSize={0.3}
      curveRadius={3}
      font='https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
      anchorX='center'
      anchorY='middle'
    >
      STARTER SELECTION
    </Text>
  )
}

const PickModel = ({ position, ...props }) => {
  const a11y = useA11y()

  return (
    <Text
     {...props}
      position={position}
      outlineWidth={a11y.focus || a11y.hover ? 0.04 : 0}
      outlineColor='#ffffff'
      fontSize={0.3}
      curveRadius={3}
      font='https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
      anchorX='center'
      anchorY='middle'
    >
      <meshStandardMaterial
        roughness={0.2}
        metalness={0}
        flatShading={false}
        emissive={'#000000'}
        color={'#000000'}
      />
      PICK YOUR STARTER
    </Text>
  )
}

const Green = ({ position, ...props }) => {
  const a11y = useA11y()

  return (
    <Text
      {...props}
      position={position}
      outlineWidth={a11y.focus || a11y.hover ? 0.04 : 0}
      outlineColor='#ffffff'
      rotation={[0, Math.PI / 6, 0]}
      fontSize={0.3}
      curveRadius={3}
      font='https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
      anchorX='center'
      anchorY='middle'
    >
      <meshStandardMaterial
        roughness={0.2}
        metalness={0}
        flatShading={false}
        emissive={'#004400'}
        color={'#004400'}
      />
      GRASS TYPE
    </Text>
  )
}
const Red = ({ position, ...props }) => {
  const a11y = useA11y()

  return (
    <Text
    {...props}
      position={position}
      outlineWidth={a11y.focus || a11y.hover ? 0.04 : 0}
      outlineColor='#ffffff'
      fontSize={0.3}
      curveRadius={3}
      font='https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
      anchorX='center'
      anchorY='middle'
    >
      <meshStandardMaterial
        roughness={0.2}
        metalness={0}
        flatShading={false}
        emissive={'#cc0000'}
        color={'#cc0000'}
      />
      FIRE TYPE
    </Text>
  )
}
const Blue = ({ position, ...props }) => {
  const a11y = useA11y()

  return (
    <Text
    {...props}
      position={position}
      outlineWidth={a11y.focus || a11y.hover ? 0.04 : 0}
      outlineColor='#ffffff'
      rotation={[0, -Math.PI / 6, 0]}
      fontSize={0.3}
      curveRadius={3}
      font='https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
      anchorX='center'
      anchorY='middle'
    >
      <meshStandardMaterial
        roughness={0.2}
        metalness={0}
        flatShading={false}
        emissive={'#0000cc'}
        color={'#0000cc'}
      />
      WATER TYPE
    </Text>
  )
}

const BoxComponent = ({ route, children }) => {
  const router = useStore((s) => s.router)
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef()
  const [menuExpanded, setMenuExpanded] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
  )
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <A11yTag tag='header'>
        <A11y role='content' description='STARTER SELECTION' tag={'h1'}>
          <Title position={[0, 3, 0]} />
        </A11y>
        <A11yTag tag='nav'>
          <A11yTag
            tag='ul'
            a11yElAttr={{
              role: 'menu',
            }}
          >
            <A11y
              parentTag={'li'}
              a11yElAttr={{
                'aria-controls': 'mainnav',
                'aria-expanded': menuExpanded,
                "role":"menuitem"
              }}
              parentElAttr={{
                role:"none"
              }}
              role='button'
              description="PICK YOUR STARTER"
              actionCall={() => {
                setMenuExpanded(!menuExpanded)
              }}
            >
              <PickModel position={[0, 2.5, 0]} />
            </A11y>

            <A11yTag
              tag='ul'
              a11yElAttr={{
                id:'mainnav',
              }}
            >
              <A11y
                role='link'
                href={'/'}
                description={'GRASS TYPE'}
                parentTag='li'
                parentElAttr={{
                  role:"none"
                }}
                a11yElAttr={{
                }}
                hidden={!menuExpanded}
                actionCall={() => {
                  router.push('/')
                }}
              >
                <Green visible={menuExpanded} position={[-2, 2.2, 0]} />
              </A11y>

              <A11y
                role='link'
                href={'/red'}
                parentTag='li'
                parentElAttr={{
                }}
                description={'FIRE TYPE'}
                a11yElAttr={{
                }}
                hidden={!menuExpanded}
                actionCall={() => {
                  router.push('/red')
                }}
              >
                <Red visible={menuExpanded} position={[0, 2.2, -0.5]} />
              </A11y>
              <A11y
                role='link'
                href={'/blue'}
                parentTag='li'
                parentElAttr={{
                }}
                a11yElAttr={{
                }}
                description={'WATER TYPE'}
                hidden={!menuExpanded}
                actionCall={() => {
                  router.push('/blue')
                }}
              >
                <Blue visible={menuExpanded} position={[2, 2.2, 0]} />
              </A11y>
            </A11yTag>
          </A11yTag>
        </A11yTag>
      </A11yTag>
      {children}
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -3, 0]}
        opacity={0.4}
        width={30}
        height={30}
        blur={1}
        far={15}
      />
    </>
  )
}
export default BoxComponent
