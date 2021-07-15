import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import { useFrame } from '@react-three/fiber'
import { ContactShadows, Text } from '@react-three/drei'
import { useRef, useState, Suspense } from 'react'
// Step 5 - delete Instructions components
import Instructions from '@/components/dom/instructions'

// Step 2 - update Box components
const PokeViewer = dynamic(() => import('@/components/canvas/PokeViewer'), {
  ssr: false,
})
// Step 2 - update Box components
const Pokeball = dynamic(() => import('@/components/canvas/Poke_demo'), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })
  return (
    <>
      <PokeViewer r3f >
        <Suspense>
          <Pokeball color1="#cc0000" position={[0,-1,-1]} scale={[0.5,0.5,0.5]} rotation={[0,Math.PI,0]} />
        </Suspense>
      </PokeViewer>
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
