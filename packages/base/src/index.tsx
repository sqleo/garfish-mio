import { GarfishInit } from './garfishInit';
import RootComponent from './components/root';
import ReactDOM from 'react-dom/client';

const render = (ROOT:any) => {
  GarfishInit();
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<ROOT />);
};

render(RootComponent);

// 开启热更新：
if ((module as any).hot) {
  (module as any).hot.accept(['./components/root'], () => {
    const _ROOT = require('./components/root').default;
    render(_ROOT);
  });
}
