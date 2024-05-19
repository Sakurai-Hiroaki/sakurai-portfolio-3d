
uniform float uTime;
uniform float uSize;
uniform float uSpeed;
uniform vec2 uResolution;
uniform float uFrequency;
attribute vec3 aPosition;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 mixedPosition = mix(position, aPosition, uSpeed);

  vec4 modelPosition = modelMatrix * vec4(mixedPosition, 1.0);

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(mixedPosition, 1.0);
  gl_PointSize = uSize * uResolution.y;
}