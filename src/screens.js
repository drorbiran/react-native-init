import {Navigation} from 'react-native-navigation';

import App from './App';
import Screen1 from './Screen1';

export function registerScreens() {

  Navigation.registerComponent('reactNativeInit.App', () => App);
  Navigation.registerComponent('reactNativeInit.Screen1', () => Screen1);

}
