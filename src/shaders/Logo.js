import {  useLoader } from '@react-three/fiber';
import * as THREE from "three";

function Logo() {
  // 画像の読み込み
  const texture = useLoader(THREE.TextureLoader, './icons/javascript.svg');

  return (
      <mesh position={[0, 1, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial map={texture} transparent={true}/>
      </mesh>
  );
}

export default Logo;