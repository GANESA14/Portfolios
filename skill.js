
const uniqueSkillDataList =[
  "HTML", "CSS", "Tailwind", "React", "React Native", "NativeScript", 
  "Flutter", "Electron JS", "TypeScript", "Firebase", "GitHub", "Linux", 
  "JSON", "Bootstrap", "PHP", "MySQL", "Three JS", "Node JS", "JavaScript", 
  "Python", "AES 256", "Native Modules"
];
const uniqueSceneWorld = new THREE.Scene();

const uniqueCameraView = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
uniqueCameraView.position.set(0, 30, 50);
uniqueCameraView.lookAt(0, 0, 0);
  
const uniqueCanvasRef = document.getElementById("Skill3D");

const uniqueRendererCore = new THREE.WebGLRenderer({
  canvas: uniqueCanvasRef,
  antialias: true,
  alpha: true
});
uniqueRendererCore.setSize(window.innerWidth, window.innerHeight);
const uniqueOrbitSystem = new THREE.OrbitControls(
  uniqueCameraView,
  uniqueCanvasRef
);

uniqueOrbitSystem.enableDamping = true;
uniqueOrbitSystem.dampingFactor = 0.05;

const uniqueSkillGroup = new THREE.Group();
uniqueSceneWorld.add(uniqueSkillGroup);

const uniqueGlobeGroup = new THREE.Group();
uniqueSceneWorld.add(uniqueGlobeGroup);

const uniqueLineMaterial = new THREE.LineBasicMaterial({
  color: 0x00ffff,
  transparent: true,
  opacity: 0.6
});

function uniqueCreateWireGlobe(uniqueRadius, uniqueLat, uniqueLon) {

  for (let i = 0; i <= uniqueLat; i++) {
    const uniqueLatitude = (i / uniqueLat) * Math.PI - Math.PI / 2;
    const uniqueLatPoints = [];

    for (let j = 0; j <= 64; j++) {
      const uniqueLongitude = (j / 64) * Math.PI * 2;
      uniqueLatPoints.push(
        new THREE.Vector3(
          uniqueRadius * Math.cos(uniqueLatitude) * Math.cos(uniqueLongitude),
          uniqueRadius * Math.sin(uniqueLatitude),
          uniqueRadius * Math.cos(uniqueLatitude) * Math.sin(uniqueLongitude)
        )
      );
    }

    const uniqueLatGeometry = new THREE.BufferGeometry().setFromPoints(uniqueLatPoints);
    uniqueGlobeGroup.add(new THREE.Line(uniqueLatGeometry, uniqueLineMaterial));
  }

  for (let i = 0; i <= uniqueLon; i++) {
    const uniqueLongitude = (i / uniqueLon) * Math.PI * 2;
    const uniqueLonPoints = [];

    for (let j = 0; j <= 64; j++) {
      const uniqueLatitude = (j / 64) * Math.PI - Math.PI / 2;
      uniqueLonPoints.push(
        new THREE.Vector3(
          uniqueRadius * Math.cos(uniqueLatitude) * Math.cos(uniqueLongitude),
          uniqueRadius * Math.sin(uniqueLatitude),
          uniqueRadius * Math.cos(uniqueLatitude) * Math.sin(uniqueLongitude)
        )
      );
    }

    const uniqueLonGeometry = new THREE.BufferGeometry().setFromPoints(uniqueLonPoints);
    uniqueGlobeGroup.add(new THREE.Line(uniqueLonGeometry, uniqueLineMaterial));
  }
}

uniqueCreateWireGlobe(20, 14, 14);

const uniqueFontLoaderCore = new THREE.FontLoader();
uniqueFontLoaderCore.load(
  "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
  function(uniqueFontData) {

    const uniqueTextMaterialCore = new THREE.MeshBasicMaterial({
      color: 0x00ffff
    });

    const uniqueRadius = 20;
    const uniqueCount = uniqueSkillDataList.length;

    for (let i = 0; i < uniqueCount; i++) {

      const uniquePhi = Math.acos(-1 + (2 * i) / uniqueCount);
      const uniqueTheta = Math.sqrt(uniqueCount * Math.PI) * uniquePhi;

      const uniqueX = uniqueRadius * Math.cos(uniqueTheta) * Math.sin(uniquePhi);
      const uniqueY = uniqueRadius * Math.sin(uniqueTheta) * Math.sin(uniquePhi);
      const uniqueZ = uniqueRadius * Math.cos(uniquePhi);

      const uniqueTextGeometryCore = new THREE.TextGeometry(
        uniqueSkillDataList[i],
        {
          font: uniqueFontData,
          size: 2,
          height: 0.4
        }
      );

      const uniqueTextMeshCore = new THREE.Mesh(
        uniqueTextGeometryCore,
        uniqueTextMaterialCore
      );

      uniqueTextMeshCore.position.set(uniqueX, uniqueY, uniqueZ);
      uniqueTextMeshCore.lookAt(0, 0, 0);
      uniqueSkillGroup.add(uniqueTextMeshCore);
    }
  }
);

function uniqueRenderLoopCore() {
  requestAnimationFrame(uniqueRenderLoopCore);
  uniqueSkillGroup.rotation.y += 0.002;
  uniqueGlobeGroup.rotation.y += 0.001;
  uniqueOrbitSystem.update();
  uniqueRendererCore.render(uniqueSceneWorld, uniqueCameraView);
}

uniqueRenderLoopCore();

window.addEventListener("resize", function() {
  uniqueCameraView.aspect = window.innerWidth / window.innerHeight;
  uniqueCameraView.updateProjectionMatrix();
  uniqueRendererCore.setSize(window.innerWidth, window.innerHeight);
});