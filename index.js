import { AppRegistry } from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'reactNativeInit.App', // unique ID registered with Navigation.registerScreen
    title: 'React Native Init', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});

