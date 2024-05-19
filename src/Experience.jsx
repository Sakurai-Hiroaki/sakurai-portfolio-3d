import { useThree, useFrame } from "@react-three/fiber";
import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";
import * as THREE from "three";
import gsap from "gsap";
import { useMenu, useMenuDispatch } from "./context/MenuContext";

const Experience = forwardRef((props, ref) => {
  const [resolution, setResolution] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const { height } = useThree((state) => state.viewport);

  useEffect(() => {
    const handleResize = () => {
      setResolution([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleResize);
    return (touchstart) => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mesh = useRef();

  useImperativeHandle(ref, () => ({
    updatePosition: () => {
      // ここに位置を更新するロジックを記述
    },
    getMesh: () => mesh.current,
  }));

  const torusRef = useRef();
  const planeRef = useRef();
  const boxRef = useRef();
  const particlesArray = [];
  let isAnimation = false;
  let currentIndex = 0;

  // const updatePosition = () => {
  //   mesh.current.geometry.setAttribute(
  //     "aPosition",
  //     new THREE.BufferAttribute(particlesArray[currentIndex], 3)
  //   );

  //   gsap.to(mesh.current.material.uniforms.uSpeed, {
  //     value: 1,
  //     duration: 1.3,
  //     onComplete: () => {
  //       mesh.current.geometry.setAttribute(
  //         "position",
  //         new THREE.BufferAttribute(particlesArray[currentIndex], 3)
  //       );
  //       mesh.current.material.uniforms.uSpeed.value = 0;
  //       isAnimation = false;
  //     },
  //     ease: "power1.in",
  //   });
  // };

  // const handleWheel = (event, direction) => {
  //   if (isAnimation) return;
  //   isAnimation = true;
  //   currentIndex =
  //     (currentIndex + direction + particlesArray.length) %
  //     particlesArray.length;
  //   updatePosition();
  // };

  // useEffect(() => {
  //   const handleWheelEvent = (event) => {
  //     const delta = event.deltaY || event.detail || event.wheelDelta;
  //     const direction = delta > 0 ? 1 : -1;
  //     handleWheel(event, direction);
  //   };

  //   window.addEventListener("wheel", handleWheelEvent);

  //   return () => {
  //     window.removeEventListener("wheel", handleWheelEvent);
  //   };
  // }, []);

  useEffect(() => {
    const spherePosition = mesh.current.geometry.attributes.position.array;
    const planePosition = planeRef.current.attributes.position.array;
    const torusPosition = torusRef.current.attributes.position.array;
    const boxPosition = boxRef.current.attributes.position.array;

    mesh.current.geometry.setIndex(null);

    // 最後のparticlesのポジションの作成
    const originalPosition = mesh.current.geometry.attributes.position;

    console.log(originalPosition);
    let { array, count } = originalPosition;
    const newArray = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      if (i3 < array.length) {
        newArray[i3 + 0] = (Math.random() - 0.5) * 15;
        newArray[i3 + 1] = (Math.random() - 0.5) * 15;
        newArray[i3 + 2] = (Math.random() - 0.5) * 15;
      } else {
        Math.floor(originalArray.length * Math.random()) * 3;
        newArray[i3 + 0] = originalArray[randomIndex + 0];
        newArray[i3 + 1] = originalArray[randomIndex + 1];
        newArray[i3 + 2] = originalArray[randomIndex + 2];
      }
    }

    particlesArray.push(
      spherePosition,
      planePosition,
      torusPosition,
      boxPosition,
      newArray
    );
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    mesh.current.rotation.x = elapsedTime * 0.02;
    mesh.current.rotation.y = elapsedTime * 0.03;
    mesh.current.material.uniforms.uTime.value = elapsedTime;
  });

  return (
    <>
      <points ref={mesh}>
        <sphereGeometry
          attach="geometry"
          args={[1.75, 32, 32, 0, Math.PI * 2 - 0.2]}
        />

        <shaderMaterial
          args={[
            {
              uniforms: {
                uSize: { value: 0.026 },
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

      {/* 以下は変形させる型のために宣言 */}

      <mesh visible={false}>
        <planeGeometry ref={planeRef} attach="geometry" args={[4, 4, 32, 32]} />
        <meshBasicMaterial wireframe />
      </mesh>

      <mesh visible={false}>
        <torusGeometry
          ref={torusRef}
          attach="geometry"
          args={[1, 0.75, 32, 32]}
        />
        <meshBasicMaterial wireframe />
      </mesh>

      <mesh visible={false}>
        <ringGeometry
          ref={boxRef}
          attach="geometry"
          args={[0.5, 2.2, 32, 32]}
        />
        <meshBasicMaterial wireframe />
      </mesh>
    </>
  );
});

export default Experience;
