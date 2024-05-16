uniform float uTime;
varying vec2 vUv;
uniform vec3 uColorA;
uniform vec3 uColorB;

void main() {
  vec2 uv = gl_PointCoord;
  float distanceToCenter = length(uv - 0.5);
  float alpha = 0.05 / distanceToCenter - 0.1 ;
  gl_FragColor = vec4(vUv , 0.9 ,alpha);
}