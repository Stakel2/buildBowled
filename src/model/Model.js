import React from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'

const Model = props => {
   const model = useLoader(
    GLTFLoader, 
    props.path
   )
    console.log('==>', model)
    let mixer
    if(model.animations.length > 0){
        mixer = new THREE.AnimationMixer(model.scene)
        model.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play()
        })
    }

    useFrame((scene, delta) => {
        mixer?.update(delta)
    })
  return (
    <primitive object={model.scene}
        {...props}
    />
    
  )
}

export default Model