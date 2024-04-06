import { Text, Text3D, Center, Html } from "@react-three/drei";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { Perf } from "r3f-perf";
import gsap from "gsap";
import Menu from "./Menu";

const vertexShader = `
uniform float uTime;
uniform float uSize;
uniform float uSpeed;
uniform vec2 uResolution;
attribute vec3 aPosition;
varying vec2 vUv;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float slowDown(float x) {

  return pow(1.0 - abs(x), 2.0) * sign(x);
}


void main() {

  vUv = uv;



float progress = 1.0;
vec3 mixedPosition = mix(position, aPosition, uSpeed);

  // vec3 newPosition = mixedPosition + uSpeed * (vec3(random(vUv + 0.0000001 * uTime), random(vUv - 0.0000001 * uTime), random(vUv * 0.0000001 * uTime)) - 0.5);


vec4  modelPosition = modelMatrix * vec4(mixedPosition, 1.0);
vec4 viewPosition = viewMatrix  * modelPosition;
vec4 projectedPosition = projectionMatrix * viewPosition;



  gl_Position = projectionMatrix * modelViewMatrix * vec4(mixedPosition, 1.0);
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
  gl_FragColor = vec4(vUv , 0.9 ,alpha);
}
`;

export default function Experience() {
  const mesh = useRef();
  const geometry = useRef();
  const materialRef = useRef();
  const textRef = useRef();
  const torusRef = useRef();
  const control = useRef();
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

    // const originalPosition = geometry.current.attributes.position;
    // let { array, count } = originalPosition;

    // const newArray = new Float32Array(count * 3);

    // for (let i = 0; i < count; i++) {
    //   const i3 = i * 3;

    //   if (i3 < array.length) {
    //     newArray[i3 + 0] = (Math.random() - 0.5) * 5;
    //     newArray[i3 + 1] = (Math.random() - 0.5) * 5;
    //     newArray[i3 + 2] = (Math.random() - 0.5) * 5;
    //   } else {
    //     console.log(1);
    //     newArray[i3 + 0] = 0;
    //     newArray[i3 + 1] = 0;
    //     newArray[i3 + 2] = 0;
    //   }
    // }
    // console.log(control.current)

    console.log(textRef.current.geometry.attributes.position.array);
    geometry.current.setAttribute(
      "aPosition",
      new THREE.BufferAttribute(control.current.attributes.position.array, 3)
    );

    // textRef.current.geometry.attributes.position.array

    console.log(control.current.attributes.position.array);

    const worldPosition = new THREE.Vector3();
    textRef.current.getWorldPosition(worldPosition);
    console.log(worldPosition);

    // console.log(materialRef.current.uniforms.aPosition)
    // array.push(newArray)

    // for (let i = 0; i < originalArray; )

    window.addEventListener("click", () => {
      gsap.to(materialRef.current.uniforms.uSpeed, {
        value: 1, // 目標値を2に設定
        duration: 1.4, // 変動にかかる時間を設定（秒）
        yoyo: true, // 値を逆にして戻す
        // ease: "power1.in",
        // repeat: 1, // アニメーションを1回だけ繰り返す
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
      <Html>
        <Menu />
      </Html>

      <points ref={mesh}>
        <sphereGeometry ref={geometry} attach="geometry" args={[1, 30, 30]} />
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

      <points visible={false}>
        <planeGeometry
          rotateY={1.3}
          visible={false}
          ref={control}
          attach="geometry"
          args={[2.5, 2.5, 30, 30]}
        />
        <meshBasicMaterial />
      </points>
      <Center color="red" top Center>
        <Text3D
          // size: 80,
          //  depth: 5,
          curveSegments={300}
          //  bevelEnabled: true,
          //  bevelThickness: 10,
          //  bevelSize: 8,
          //  bevelOffset: 0,
          //  bevelSegments: 5
          ref={textRef}
          scale={0.3}
          font={"./fonts/Silkscreen_Regular.json"}
          bevelSegments={300}
        >
          WELCOME
        </Text3D>
      </Center>
    </>
  );
}
