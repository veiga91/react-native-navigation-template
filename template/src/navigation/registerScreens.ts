import { Navigation } from 'react-native-navigation';
import * as screens from 'screens';

const getKeyValue = (key: string, obj: Record<string, any>) => obj[key];

const registerScreens = (): void => {
  for (let key in screens) {
    Navigation.registerComponent(key, () => getKeyValue(key, screens));
  };
};

export default registerScreens;
