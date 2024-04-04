import {
    MeshReflectorMaterial,
    Float,
    Text,
    Html,
    PivotControls,
    TransformControls,
    OrbitControls,
    shaderMaterial,
    ScrollControls,
    PointMaterial,
    Scroll,
    useScroll,
    Text3D,
  } from '@react-three/drei';
  import { useFrame, extend } from '@react-three/fiber';
  import { useRef, useEffect } from 'react';
  import * as THREE from 'three';
  
  // カスタムシェーダーマテリアルを作成
  const CustomShaderMaterial = shaderMaterial(
    // Uniforms
    {
      uSize: 0.4,
      uTime: 0.0,
    },
    // Vertex Shader
    `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 30.0;
      }
    `,
    // Fragment Shader
    `
      varying vec2 vUv;
  
      void main() {
        vec2 uv = gl_PointCoord;
        float distanceToCenter = length(uv - 0.5);
        float alpha = 0.05 / distanceToCenter - 0.1;
        
        gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `
  );
  
  extend({ CustomShaderMaterial })



  export default function Experience() {
  
    const mesh = useRef();
    const geometry = useRef();

    useFrame(() => {
    //   mesh.current.rotation.x += 0.005;
    //   mesh.current.rotation.y += 0.005;
      // console.log(PortalMaterial);
    });
  
    useEffect(() => {
      // カスタムシェーダーマテリアルのdepthWriteをfalseに設定
    mesh.current.material.depthWrite = false;
    mesh.current.material.blending = THREE.AdditiveBlending; // blending: THREE.AdditiveBlendingをしゅとくするには
    
    mesh.current.geometry.setIndex(null)





    console.log(mesh.current.geometry.attributes.position);




















    }, []);
  
    return (
      <>

        <ScrollControls>
          <Scroll>
            <points ref={mesh}>
              <sphereGeometry ref={geometry} attach="geometry" args={[1, 30, 30]} />
              {/* <PointMaterial
                transparent
                vertexColors
                size={1}
                sizeAttenuation={false}
                depthWrite={false}
              /> */}
              <customShaderMaterial uSize={0.4}   />
            </points>
  
          </Scroll>
          <Scroll html>
            <h1 style={{ position: 'absolute', top: '60vh', left: '1.5em' }}>
              Hello
            </h1>
          </Scroll>
        </ScrollControls>

      </>
    );
  }