
uniform float uTime;
uniform float uSize;
uniform float uSpeed;
uniform vec2 uResolution;
uniform float uFrequency;
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
  vec3 mixedPosition = mix(position, aPosition, uSpeed);
  // mixedPosition.x +=  sin(mixedPosition.y * 10.0 + uTime)* uSpeed  * 0.08;
  // mixedPosition.y +=  sin(mixedPosition.x * 100.0 + uTime) * uSpeed  * 0.5;


  vec4 modelPosition = modelMatrix * vec4(mixedPosition, 1.0);
  // ここに追加します


  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(mixedPosition, 1.0);
  gl_PointSize = uSize * uResolution.y;
}