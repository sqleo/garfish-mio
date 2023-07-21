import GarfishInstance from 'garfish';

export const loadApp = 'loadApp';
export const basename = 'examples';
export const prefixCls = 'main-app';

type AppInfo = NonNullable<Parameters<typeof GarfishInstance.run>[0]>['apps'];

const portMap:any = {
  "dev/main": {
    "pkgName": "@garfish-dev/main",
    "port": 8090
  },
  "dev/react18": {
    "pkgName": "@garfish-dev/react18",
    "port": 3001
   },
}
const getProxyHost = (appName: string):string => `http://localhost:${portMap[appName].port}`;

export const localApps: AppInfo = [
  {
    name: 'react18',
    activeWhen: '/react18',
    entry: getProxyHost('dev/react18'),
  },
]