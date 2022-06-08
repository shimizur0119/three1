import type { NextPage } from 'next'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Loader, OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

function Suzi(props: any) {
  const { nodes } = useGLTF('/suzanne-draco.glb') as any
  const ref: any = useRef()

  useFrame(() => {
    ref.current.rotation.y += 0.01
  })
  const materialProps = {
    thickness: 5,
    roughness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0,
    transmission: 1,
    ior: 1.25,
    envMapIntensity: 25,
    color: '#ffffff',
    attenuationTint: '#ffe79e',
    attenuationDistance: 0,
  }
  return (
    <mesh ref={ref} geometry={nodes.Suzanne.geometry} {...props}>
      <meshPhysicalMaterial {...materialProps} />
    </mesh>
  )
}


const Page: NextPage = () => {
  const envProps = { background: false }

  return (
    <div>
      <div id="canvas-container" className='fixed w-screen h-screen top-0 left-0 -z-10'>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 2.5] }} gl={{ alpha: false }}>
          <color attach="background" args={['#151518']} />
          <Suspense fallback={null}>
            <Suzi />
            <Environment {...envProps} files="adams_place_bridge_1k.hdr" />
            <group rotation={[0, 0, Math.PI / 4]}>
              <mesh position={[0, 0, -10]} material-color="hotpink">
                <planeGeometry args={[20, 2]} />
              </mesh>
              <mesh position={[0, 0, -10]} material-color="hotpink">
                <planeGeometry args={[2, 20]} />
              </mesh>
            </group>
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </div>
  )
}

export default Page
