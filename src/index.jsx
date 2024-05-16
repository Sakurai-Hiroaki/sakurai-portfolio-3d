import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import Experience from "./Experience.jsx";
import { Suspense, useState, useRef } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HtmlContent from "./HtmlContent.jsx";
import { MenuProvider } from "./context/MenuContext.jsx";
import { useSwipeable } from "react-swipeable";
import App from "./App.jsx";

const theme = extendTheme({
  fonts: {
    body: "Silkscreen DotGothic16 sans-serif",
    heading: "Silkscreen DotGothic16 sans-serif",
  },
});

{
  /* <div
style={{
  position: "absolute",
  top: 0,
  left: 0,
  pointerEvents: "none",
  width: "100%",
  height: "100%",
}}
>
<a
  style={{
    position: "absolute",
    bottom: 10,
    left: 20,
    fontSize: "13px",
  }}
>
  SAKURAI
  <br />
  HIROAKI
</a>
<div
  style={{ position: "absolute", top: 20, left: 20, fontSize: "13px" }}
>
  PORTFOLIO —
</div>
<div
  style={{
    position: "absolute",
    bottom: 10,
    right: 20,
    fontSize: "13px",
  }}
>
  4/22/2024
</div>
</div> */
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <MenuProvider>
      <ChakraProvider theme={theme}>
        {/* <Leva /> */}

        <Suspense fallback={null}>
          <App />
        </Suspense>
      </ChakraProvider>
    </MenuProvider>
  </>
);
