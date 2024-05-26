import { useFrame } from "@react-three/fiber";
import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  memo,
} from "react";
import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";
import * as THREE from "three";

const Experience = memo(
  forwardRef((props, ref) => {
    const mesh = useRef();

    const [resolution, setResolution] = useState([
      window.innerWidth,
      window.innerHeight,
    ]);

    useEffect(() => {
      const handleResize = () => {
        setResolution([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    useImperativeHandle(ref, () => ({
      getMesh: () => mesh.current,
    }));

    useEffect(() => {
      mesh.current.geometry.setIndex(null);
    }, []);

    useFrame(({ clock }) => {
      const elapsedTime = clock.getElapsedTime();
      mesh.current.rotation.x = elapsedTime * 0.03;
      mesh.current.rotation.y = elapsedTime * 0.07;
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
      </>
    );
  })
);

export default Experience;
