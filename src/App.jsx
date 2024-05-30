import './style.css';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import Header from './Header';
import { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';
import HtmlContent from './HtmlContent.jsx';
import { useSwipeable } from 'react-swipeable';
import gsap from 'gsap';
import { useMenu } from './context/MenuContext';
import * as THREE from 'three';
import planePosition32Array from './attributes/plane.js';

const App = () => {
  const childRef = useRef();
  const stackRef = useRef();
  const menus = useMenu();
  const navigate = useNavigate();
  const location = useLocation();


  const getNextMenuItem = (name) => {
    const index = menus.findIndex((menu) => menu.name === name);
    return menus[(index + 1) % menus.length] || null;
  };

  const updatePosition = (path) => {
    if (childRef.current.getMesh().material.uniforms.uSpeed.value > 0) return;
    const targetPosition = menus.find((menu) => menu.name === path).geometry;

    childRef.current
      .getMesh()
      .geometry.setAttribute(
        'aPosition',
        new THREE.BufferAttribute(targetPosition, 3)
      );

    gsap.to(childRef.current.getMesh().material.uniforms.uSpeed, {
      value: 1,
      duration: 1.3,
      onComplete: () => {
        childRef.current
          .getMesh()
          .geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(targetPosition, 3)
          );
        childRef.current.getMesh().material.uniforms.uSpeed.value = 0;
      },
      ease: 'power1.in',
    });
  };

  const handleWheelEvent = (event) => {
    const currentPath = location.pathname.slice(1);
    const nextMenu = getNextMenuItem(currentPath);
    if (nextMenu) {
      updatePosition(nextMenu.name);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') navigate('/profile');
  }, [location, navigate]);

  useEffect(() => {
    stackRef.current.addEventListener('wheel', handleWheelEvent, {
      passive: true,
    });
    return () => {
      stackRef.current.removeEventListener('wheel', handleWheelEvent);
    };
  }, [location, menus]);

  const handlers = useSwipeable({
    onSwipedDown: () => console.log('Swiped Down'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <Canvas
        flat
        camera={{ fov: 45, near: 0.1, far: 50, position: [0, 2, 10] }}
      >
        <color args={['#030303']} attach="background" />
        <Experience ref={childRef} />
      </Canvas>

      <HtmlContent />

      <Stack
        ref={stackRef}
        position="absolute"
        top={0}
        w={'100%'}
        minH={'100vh'}
        zIndex={101}
      />

      <Header updatePosition={updatePosition} />
    </>
  );
};

export default App;
