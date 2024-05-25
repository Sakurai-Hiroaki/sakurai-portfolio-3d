import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // あなたのアプリケーションのメインコンポーネント
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, Box} from '@chakra-ui/react';
import { MenuProvider } from './context/MenuContext.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(

    <BrowserRouter>
      <MenuProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </MenuProvider>
    </BrowserRouter>

);