import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Environment } from '@react-three/drei'
import { A11yUserPreferences } from '@react-three/a11y'
import useStore from '@/helpers/store'
import { useEffect, useRef, Suspense } from 'react'


const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <Canvas
      mode='concurrent'
      style={{
        position: 'absolute',
        top: 0,
      }}
      onCreated={(state) => state.events.connect(dom.current)}
    >
      <Suspense fallback={null}>
        <Environment preset={'forest'} background={false} />
      </Suspense>
      <A11yUserPreferences>
        <Preload all />
        {children}
      </A11yUserPreferences>
    </Canvas>
  )
}

export default LCanvas
