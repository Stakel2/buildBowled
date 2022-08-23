import { useRef, useState, Suspense } from 'react'
import {
  Canvas, 
  useFrame, 
  useThree, 
  extend,
  useLoader 
} from '@react-three/fiber';
import { Stars} from '@react-three/drei'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three'
import { DoubleSide } from 'three';
import Grid from '../../../Grid';
import Controls from "../../../Controls";
import './StarsAni.scss'








function RotateControls(props) {
  const { camera, gl } = useThree()
  const reff = useRef()
  useFrame(() => reff.current.update())
  return <orbitControls ref={reff} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
}



const StarsAni = () =>  {
  return (
      <div className='starAnimation'>
        <Canvas  style={{background:'#01012a'}} camera={{ position: [0, 2, 10] }}>
              <ambientLight  intensity={1}/>
              {/* <RotateControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.002} autoRotate={true} rotateSpeed={1000} /> */}
              <Stars  radius={50} depth={30} count={1000} factor={8} saturation={0} fade speed={10}  />
        </Canvas>
      </div>
  );
}

export {StarsAni}