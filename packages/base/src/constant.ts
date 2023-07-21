import GarfishInstance from 'garfish';

export const loadApp = 'loadApp';
export const basename = 'examples';
export const prefixCls = 'main-app';

type AppInfo = NonNullable<Parameters<typeof GarfishInstance.run>[0]>['apps'];
const portMap = {
  "dev/main": {
    "pkgName": "@garfish-dev/main",
    "port": 8090
  }
}
// const getProxyHost = (appName: string) =>`http://localhost:${portMap[appName].port}`;

export const localApps: AppInfo = []