import Garfish, { interfaces } from 'garfish';
import React, { useEffect, useMemo } from 'react';


const App = () => {
  const config: interfaces.Options = useMemo(() => {
    return {
      basename: '/',
      domGetter: '#subApp',
      disablePreloadApp: false,
      apps: [
        {
          name: 'react',
          activeWhen: '/react',
          entry: 'http://localhost:3000',
        }
      ],
      /* lifecycle hooks */
      beforeLoad(appInfo) {
        console.log('子应用开始加载', appInfo.name);
      },
      afterLoad(appInfo) {
        console.log('子应用加载完成', appInfo.name);
      },
  }
  }, [])
  useEffect(() => {
    Garfish.run(config);
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div id="container"></div>
      </header>
    </div>
  );
}


export default App;
