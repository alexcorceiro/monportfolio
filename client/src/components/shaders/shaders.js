// Vertex Shader
export const vertexShader = `
varying vec3 vNormal;

void main() {
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

`;




// Fragment Shader
export const fragmentShader = `
uniform vec3 cameraPosition;
varying vec3 vNormal;

void main() {
  float intensity = pow(0.5 - dot(vNormal, normalize(cameraPosition)), 2.0);
  gl_FragColor = vec4(vec3(intensity), 1.0);
}
`;


