"use client"

import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { Model } from "./Robot"

export const RobotCanva = () => {
  const mouse = useRef(new THREE.Vector2(0, 0))

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
  }

  return (
    <div
      className="fixed z-100 w-full h-full rounded-2xl overflow-hidden"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        className="w-full h-full"
        shadows
        camera={{ position: [0, 3, 8], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <spotLight position={[8, 8, 8]} angle={0.2} penumbra={0.3} intensity={1} castShadow />
        <pointLight position={[-8, -8, -8]} intensity={0.5} color="#E8B84B" />
        <pointLight position={[8, -8, 8]} intensity={0.3} color="#E8B84B" />

        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          // autoRotate={true}
          autoRotateSpeed={0.5}
          target={[0, 0, 0]}
          makeDefault
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
        <Model mouse={mouse} />
      </Canvas>
    </div>
  )
}