import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'reactNativeInit.App'
            }
          }
        ],
        options: {
          topBar: {
            title: {
              text: 'React Native Init'
            }
          }
        }
      }
    }
  });
});

