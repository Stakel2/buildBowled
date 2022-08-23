import { useRef, useState, Suspense } from "react";
import {
  Canvas,
  useFrame,
  useThree,
  extend,
  useLoader,
} from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { DoubleSide } from "three";
import Grid from "../../../Grid";
import Controls from "../../../Controls";
import "./ThreeAnimation.scss";

extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const handlePointerDown = (e) => {
  console.log(e);
};
const handlePointerEnter = (e) => {
  e.object.scale.x = 1.5;
  e.object.scale.y = 1.5;
  e.object.scale.z = 1.5;
};
const handlePointerLeave = (e) => {
  e.object.scale.x = 1;
  e.object.scale.y = 1;
  e.object.scale.z = 1;
};

const Box = (props) => {
  const ref = useRef();

  const texture = useLoader(THREE.TextureLoader, "/crypto-bg.jpg");
  useFrame((state) => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.01;
  });

  return (
    <mesh
      ref={ref}
      // castShadow
      // receiveShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial
        map={texture}
      // color='blue'
      // opacity={0.7}
      // transparent
      // wireframe
      // metalness={1}
      // roughness={0}
      // clearcoat={1}
      // transmission={0.5}
      // reflectivity={1}
      // side={THREE.DoubleSide}
      // transmission={0.4}
      />
    </mesh>
  );
};

const Background = (props) => {
  const texture = useLoader(THREE.TextureLoader, "./bgStudio.jpg");

  const { gl } = useThree();

  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);

  return <primitive attach="background" object={formatted} />;
};

const Floor = (props) => {
  return (
    <mesh receiveShadow {...props}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
};

const Blub = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

const CricketCard = (props) => {
  const texture = useLoader(THREE.TextureLoader, props.path);

  return (
    <mesh {...props}>
      <planeGeometry args={[1.7, 2.5, 2, 1]} />
      <meshPhysicalMaterial map={texture} side={DoubleSide} transparent />
    </mesh>
  );
};

const CricketCardBack = (props) => {
  const texture1 = useLoader(THREE.TextureLoader, props.pathB);

  return (
    <mesh {...props}>
      <planeGeometry args={[1.7, 2.5, 2, 1]} />
      <meshPhysicalMaterial map={texture1} side={DoubleSide} transparent />
    </mesh>
  );
};

function RotateControls(props) {
  const { camera, gl } = useThree();
  const reff = useRef();
  useFrame(() => reff.current.update());
  return (
    <orbitControls
      ref={reff}
      target={[0, 0, 0]}
      {...props}
      args={[camera, gl.domElement]}
    />
  );
}

const GroupRotation = (props) => {
  const gref = useRef();
  // useFrame(state => {
  //   gref.current.rotation.y += 0.005;
  // })

  useFrame((state) => {
    gref.current.children.forEach((child, index) => {
      child.position.y +=
        Math.sin(index * 1000 + state.clock.elapsedTime) / 550;
      child.rotation.x +=
        (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 2000;
      child.rotation.y +=
        (Math.cos(index * 1000 + state.clock.elapsedTime) * Math.PI) / 3000;
      child.rotation.z +=
        (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 4000;
    });
  });
  return (
    <Suspense fallback={null}>
      <group scale={1.8} position={[0, 0.3, 0]} ref={gref}>
        <group>
          <CricketCard
            path="/card-1.png"
            scale={0.8}
            rotation={[-0.45, 0, -0.05]}
            position={[-1.75, 1.3, 0.2]}
          />
          <CricketCardBack
            pathB="/card-5.png"
            scale={0.8}
            rotation={[-0.45, 0, -0.05]}
            position={[-1.75, 1.3, 0.1875]}
          />
        </group>

        <group>
          <CricketCard
            path="/card-2.png"
            scale={[0.78125, 0.9375, 0.9375]}
            rotation={[-0.125, -1.1875, 0]}
            position={[-3.1875, -0.09375, 0.6875]}
          />
          <CricketCardBack
            pathB="/card-5.png"
            scale={[0.78125, 0.9375, 0.9375]}
            rotation={[-0.125, -1.1875, 0]}
            position={[-3.1875, -0.09375, 0.6775]}
          />
        </group>

        <group>
          <CricketCard
            path="/card-3.png"
            scale={[0.875, 1, 1]}
            rotation={[0.15625, -2.1875, 0.25]}
            position={[-2.125, 0.03125, -1.78125]}
          />
          <CricketCardBack
            pathB="/card-5.png"
            scale={[0.875, 1, 1]}
            rotation={[0.15625, -2.1875, 0.25]}
            position={[-2.125, 0.03125, -1.75125]}
          />
        </group>

        <group>
          <CricketCard
            path="/card-4.png"
            scale={[0.9375, 0.96875, 1]}
            rotation={[0.0625, 0.125, 0.3125]}
            position={[0.15625, 0.4375, -3]}
          />
          <CricketCardBack
            pathB="/card-5.png"
            scale={[0.9375, 0.96875, 1]}
            rotation={[0.0625, 0.125, 0.3125]}
            position={[0.15625, 0.4375, -2.98875]}
          />
        </group>

        <group>
          <CricketCard
            path="/card-5.png"
            scale={[0.90625, 0.96875, 1]}
            rotation={[0.09375, 2.15625, 0.21875]}
            position={[1.6875, 0.125, -1.1875]}
          />
          <CricketCardBack
            pathB="/card-5.png"
            scale={[0.90625, 0.96875, 1]}
            rotation={[0.09375, 2.15625, 0.21875]}
            position={[1.6875, 0.125, -1.15625]}
          />
        </group>

        <group>
          <CricketCard
            path="/KW.png"
            scale={[1, 1.0625, 1]}
            rotation={[-0.03125, 0.9375, -0.125]}
            position={[2.3125, 0.09375, 1.21875]}
          />
          <CricketCardBack
            pathB="/card-5.png"
            scale={[1, 1.0625, 1]}
            rotation={[-0.03125, 0.9375, -0.125]}
            position={[2.3125, 0.09375, 1.1875]}
          />
        </group>

        <group>
          <CricketCard
            path="/stadium.png"
            scale={[0.59375, 0.64375, 0.46875]}
            rotation={[-0.0625, 0.03125, 1]}
            position={[-1.6875, -0.84375, 1.875]}
          />
          <CricketCardBack
            pathB="/card-5.png"
            scale={[0.59375, 0.64375, 0.46875]}
            rotation={[-0.0625, 0.03125, 1]}
            position={[-1.6875, -0.84375, 1.84375]}
          />
        </group>
        <group>
          <CricketCard
            path="/KW.png"
            scale={[1, 1, 1]}
            rotation={[-0.15625, -0.21875, 0.5625]}
            position={[0.0625, 0.03125, 3]}
          />
          <CricketCardBack
            pathB="/card-5.png"
            scale={[1, 1, 1]}
            rotation={[-0.15625, -0.21875, 0.5625]}
            position={[0.09375, 0.03125, 3]}
          />
        </group>
      </group>
    </Suspense>
  );
};

const ThreeAnimation = () => {

  // const [xPosition, setXPosition] = useState(0);
  // const [yPosition, setYPosition] = useState(0);
  // const [zPosition, setZPosition] = useState(0);

  // const [xRotation, setXRotation] = useState(0);
  // const [yRotation, setYRotation] = useState(0);
  // const [zRotation, setZRotation] = useState(0);

  // const [xScale, setXScale] = useState(1);
  // const [yScale, setYScale] = useState(1);
  // const [zScale, setZScale] = useState(1);

  return (
    <div className="cardsAnimtaion">
      <Canvas
        style={{ background: "transparent" }}
        camera={{ position: [0, 2, 10] }}
      >
        {/* <fog attach='fog' args={['white', 1, 10]} /> */}
        <ambientLight intensity={1} />
        {/* <Orbit /> */}
        {/* <axesHelper args={[4]} /> */}
        <pointLight />
        {/* <Suspense fallback={null}>
                <Model 
                  path='/scene.gltf' 
                  scene={new Array(3).fill(1)}  
                />
              </Suspense> */}
        {/* <Suspense fallback={null}>
                <Box position={[0,1,0]}/>
              </Suspense>
              {/* <Suspense fallback={null}>
                <Box position={[0,1,0]}/>
              </Suspense>
              <Suspense fallback={null}>
                <Background/>
              </Suspense> */}
        {/* <Blub position={[0,3,0]} /> */}

        <GroupRotation />

        <RotateControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
          autoRotate={true}
          rotateSpeed={0.001}
        />

        {/* <Stars  radius={50} depth={50} count={1000} factor={8} saturation={0} fade speed={0}  /> */}
        {/* <Grid size={8} /> */}

        {/* <Floor position={[0,-0.5,0]}/> */}
      </Canvas>
      {/* <Controls
          controls={{
          xPosition,
          yPosition,
          zPosition,
          xRotation,
          yRotation,
          zRotation,
          xScale,
          yScale,
          zScale,
          setXPosition,
          setYPosition,
          setZPosition,
          setXRotation,
          setYRotation,
          setZRotation,
          setXScale,
          setYScale,
          setZScale
        }} 
      /> */}
    </div>
  );
};

export { ThreeAnimation };