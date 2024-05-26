import './style.css';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.jsx';
import Header from './Header';
import { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { extendTheme, Stack, Center } from '@chakra-ui/react';
import HtmlContent from './HtmlContent.jsx';
import { useSwipeable } from 'react-swipeable';
import gsap from 'gsap';
import { useMenu, useMenuDispatch } from './context/MenuContext';
import * as THREE from 'three';
import planePosition32Array from './attributes/plane.js';

const theme = extendTheme({
  fonts: {
    body: 'Silkscreen DotGothic16 sans-serif',
    heading: 'Silkscreen DotGothic16 sans-serif',
  },
});

const App = () => {
  const childRef = useRef();
  const reducer = useMenuDispatch();
  const menus = useMenu();

  const navigate = useNavigate();
  const location = useLocation();
  const locationpath = location.pathname.slice(1);

  let isAnimation = false;
  let currentIndex = 0;

  const stackRef = useRef();

  const getNextMenuItem = (name) => {
    const index = menus.findIndex((menu) => menu.name === name);
    return menus[(index + 1) % menus.length] || null;
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('Swiped Up');
      // updatePosition();
    },
    onSwipedUp: () => {
      console.log('Swiped Up');
      // updatePosition();
    },

    onSwipedDown: () => {
      console.log('Swiped Down');
      // updatePosition();
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    location.pathname === '/' && navigate('/profile');
  }, [location]);

  const testFunction = () => {
    const current = location.pathname.slice(1);
    console.log(menus.filter((menu) => menu.name === current));
  };

  const updatePosition = (path) => {
    if (isAnimation) return;
    isAnimation = true;

    const targetPosition = menus.find((menu) => menu.name === path).geometry;

    currentIndex =
      (currentIndex + 1 + planePosition32Array.length) %
      planePosition32Array.length;

    //  アニメーション先(aPosition)のジオメトリを設定する
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
        // アニメーションが完了したら、positionを再登録する
        childRef.current
          .getMesh()
          .geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(targetPosition, 3)
          );
        childRef.current.getMesh().material.uniforms.uSpeed.value = 0;
        isAnimation = false;
      },
      ease: 'power1.in',
    });
  };

  useEffect(() => {
    const handleWheelEvent = (event) => {
      const navi = getNextMenuItem(location);
      // updatePosition(location);
    };

    stackRef.current.addEventListener('wheel', handleWheelEvent, {
      passive: true,
    });

    return () => {
      stackRef.current.removeEventListener('wheel', handleWheelEvent);
    };
  }, []);

  return (
    <>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 50,
          position: [0, 2, 10],
        }}
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
      ></Stack>

      <Header updatePosition={updatePosition} />
    </>
  );
};

export default App;
