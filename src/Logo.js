import { Float, Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function useTextureLoader(paths) {
  return useLoader(THREE.TextureLoader, paths.map((path) => `./icons/${path}`));
}

function Logo() {
  const textures = useTextureLoader([
    "javascript.png",
    "react.png",
    "git.png",
    "typescript.png",
    "html.png",
    "css.png",
    "three.png",
  ]);

  const descriptions = [
    "JavaScript",
    "React",
    "Git",
    "TypeScript",
    "HTML",
    "CSS",
    "Three.js"
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
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <Html position={[1.75, 3, 0]}>
        <Text color="white">
          {textureIndices.prev + 1}/{textureIndices.length}
        </Text>
      </Html>

      <mesh scale={0.5} position={[-1.75, 1.5, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial
          side={THREE.DoubleSide}
          map={textures[textureIndices.prev]}
          transparent={true}
          opacity={0.5}
        />
      </mesh>

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.05}>
        <mesh position={[0, 1.5, 0]}>
          <planeGeometry args={[2, 2]} />
          <meshBasicMaterial
            side={THREE.DoubleSide}
            map={textures[textureIndices.current]}
            transparent={true}
          />
        </mesh>
      </Float>

      <mesh scale={0.5} position={[1.75, 1.5, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial
          side={THREE.DoubleSide}
          map={textures[textureIndices.next]}
          transparent={true}
          opacity={0.5}
        />
      </mesh>

      <Html center position={[0, -1.5, 0]}>
        <Box p={5} w={350} color="white">
          <Text fontFamily="DotGothic16" textAlign='center' letterSpacing={8} fontSize="1xl">
            {descriptions[textureIndices.current]}
          </Text>
        </Box>
      </Html>
    </>
  );
}

export default Logo;
