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
} from "@react-three/drei";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Perf } from "r3f-perf";
import gsap from "gsap";

const vertexShader = `
uniform float uTime;
uniform float uSize;
uniform float uSpeed;
uniform vec2 uResolution;
varying vec2 vUv;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float slowDown(float x) {

  return pow(1.0 - abs(x), 2.0) * sign(x);
}



void main() {

  vUv = uv;

  vec3 newPosition = position + uSpeed * (vec3(random(vUv + 0.0000001 * uTime), random(vUv - 0.0000001 * uTime), random(vUv * 0.0000001 * uTime)) - 0.5);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  gl_PointSize = uSize * uResolution.y;
}
`;

const fragmentShader = `
uniform float uTime;
varying vec2 vUv;
uniform vec3 uColorA;
uniform vec3 uColorB;


void main() {
  vec2 uv = gl_PointCoord;
  float distanceToCenter = length(uv - 0.5);
  float alpha = 0.05 / distanceToCenter - 0.1 ;
  gl_FragColor = vec4(0.0, 0.3 , 0.9 ,alpha);
}
`;

export default function Experience() {
  const mesh = useRef();
  const geometry = useRef();
  const materialRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [resolution, setResolution] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    mesh.current.rotation.x = elapsedTime * 0.06;
    mesh.current.rotation.y = elapsedTime * 0.07;
    materialRef.current.uniforms.uTime.value = elapsedTime;
  });

  useEffect(() => {
    mesh.current.geometry.setIndex(null);
    window.addEventListener("touchstart", () => {
      gsap.to(materialRef.current.uniforms.uSpeed, {
        value: 3, // 目標値を2に設定
        duration: 1.5, // 変動にかかる時間を設定（秒）
        yoyo: true, // 値を逆にして戻す
        ease: "power1.in",
        repeat: 1, // アニメーションを1回だけ繰り返す
      });
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setResolution([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return (touchstart) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Perf />
      <ScrollControls>
        <Scroll>
          <points ref={mesh}>
            <sphereGeometry
              ref={geometry}
              attach="geometry"
              args={[0.8, 60, 60]}
            />
            <shaderMaterial
              ref={materialRef}
              args={[
                {
                  uniforms: {
                    uSize: { value: 0.028 },
                    uTime: { value: 0 },
                    uResolution: { value: new THREE.Vector2(...resolution) },
                    uColorA: new THREE.Uniform(new THREE.Color("#ff7300")),
                    uColorB: new THREE.Uniform(new THREE.Color("#0091ff")),
                    uSpeed: { value: 0 },
                  },
                  vertexShader,
                  fragmentShader,
                  blending: THREE.AdditiveBlending,
                  depthWrite: false,
                },
              ]}
            />
          </points>
        </Scroll>
        {/* <Scroll html>
          <h1 style={{ position: "absolute", top: "60vh", left: "1.5em" }}>
            Hello
          </h1>
        </Scroll> */}
      </ScrollControls>
    </>
  );
}
