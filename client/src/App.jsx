

import './App.css'
import {Unity, useUnityContext } from 'react-unity-webgl'



function App() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "assets/Build/Build/Build1.loader.js",
    dataUrl: "assets/Build/Build/Build1.data.gz",
    frameworkUrl: "assets/Build/Build/Build1.framework.js.gz",
    codeUrl: "assets/Build/Build/Build1.wasm.gz",
  });

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Unity
        style={{
          width: '90vw',
          height: '90vh',
          border: "2px solid black",
          margin: 'auto',
          alignItems: 'center',
          justifyItems: 'center',
        }}
        unityProvider={unityProvider}
      />
    </div>
  )
}

export default App
