import { Float, Html } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Box, Text, Stack, position } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { gsap } from "gsap/gsap-core";

function useTextureLoader(paths) {
  return useLoader(
    THREE.TextureLoader,
    paths.map((path) => `./icons/${path}`)
  );
}

function Logo({ position }) {
  const prevIconRef = useRef();
  const currentIconRef = useRef();
  const nextIconRef = useRef();

  const textures = useTextureLoader([
    "javascript.png",
    "typescript.png",
    "react.png",
    "git.png",
    "html.png",
    "css.png",
    "three.png",
  ]);

  const LogoTitle = [
    "JavaScript",
    "TypeScript",
    "React",
    "Git",
    "HTML",
    "CSS",
    "Three.js",
  ];

  const descripition = [
    `4年の実務経験がありますなんとなくいろんなことをやっていきたいと`,
    "TypeScript",
    "React",
    "問題なく使用可能",
    "HTML",
    "CSS",
    "Three.js",
  ];

  const [textureIndices, setTextureIndices] = useState({
    prev: 0,
    current: 1,
    next: 2,
    length: textures.length,
  });

  useEffect(() => {
    const handleClick = () => {
      console.log(`Previous index: ${textureIndices.prev}`);

      setTextureIndices((prevIndices) => {
        const newPrev = prevIndices.current;
        const newCurrent = (prevIndices.current + 1) % prevIndices.length;
        const newNext = (prevIndices.current + 2) % prevIndices.length;

        console.log(`Updated previous index: ${newPrev}`);

        return {
          ...prevIndices,
          prev: newPrev,
          current: newCurrent,
          next: newNext,
        };
      });

      gsap.to(currentIconRef.current.children[0].rotation, {
        y: currentIconRef.current.children[0].rotation.y + Math.PI * 2,
        duration: 0.2,
        ease: "power2.in",
      });
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // useFrame(({ clock }) => {
  //   const elapsedTime = clock.getElapsedTime();
  //   currentIconRef.current.rotation.x = elapsedTime * 1;
  //   currentIconRef.current.rotation.y = elapsedTime * 1;

  // });

  return (
    <group position={position}>
      <Html position={[1.35, 3, 0]}>
        <Text color="white">
          {textureIndices.prev + 1}/{textureIndices.length}
        </Text>
      </Html>

      <Html scale={3} position={[2, 0, 0]}>
        <ArrowRightIcon color="white"></ArrowRightIcon>
      </Html>

      <mesh scale={0.5} position={[-1.75, 1.5, 0]} ref={prevIconRef}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial
          side={THREE.DoubleSide}
          map={textures[textureIndices.prev]}
          transparent={true}
          opacity={0.3}
        />
      </mesh>

      <Float
        speed={1.5}
        rotationIntensity={1.5}
        floatIntensity={0.05}
        ref={currentIconRef}
      >
        <mesh position={[0, 1.5, 0]}>
          <planeGeometry args={[2, 2]} />
          <meshBasicMaterial
            side={THREE.DoubleSide}
            map={textures[textureIndices.current]}
            transparent={true}
          />
        </mesh>
      </Float>

      <mesh scale={0.5} position={[1.75, 1.5, 0]} ref={nextIconRef}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial
          side={THREE.DoubleSide}
          map={textures[textureIndices.next]}
          transparent={true}
          opacity={0.5}
        />
      </mesh>

      <Html center position={[0, -0.1, 0]}>
        <Box p={5} w={350} color="white">
          <Text fontFamily="DotGothic16" align="center" fontSize="large">
            {LogoTitle[textureIndices.current]}
          </Text>
        </Box>
      </Html>

      <Html center position={[0, -2, 0]}>
        <Box p={5} w={350} color="white">
          <Text align="center" letterSpacing={8} >
            {/* {descripition[textureIndices.current]} */}
            ４年ほどの実務経験があります
            様々なフロントエンド案件に携わって来ましたがフォーム系の作成経験が多いです
          </Text>
        </Box>
      </Html>
    </group>
  );
}

export default Logo;
