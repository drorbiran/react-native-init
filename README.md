# react-native-navigation-bootstrap

## Bootstrap for a vanilla `react-native-navigation` based project

Clone this repository to start a project based on

```
"react-native": "0.51.1",
"react": "^16.3.0-alpha.1",
"react-native-navigation": "^2.0.0",
"react-native-ui-lib": "^3.3.32"
```


Check `react-native-navigation`'s [documentation](https://wix.github.io/react-native-navigation/v2/#/) for usage details.


### preparing your project

Download npm dependencies:

```sh
npm i -g react-native-cli
npm install
```

### Running your project

From project dir, run:

#### iOS
1. Build and run (this will start a simulator if not already started)

	```sh
	react-native run-ios
	```
	This would also start a packager if not already started

2. Set your Simulator to live reload changes `⌘`+`d`  (`cmd`+`d`) => `Enable Live Reload`



#### Android
1. Start an emulator
2. Build and run

	```sh
	react-native run-android
	```
	This would also start a packager if not already started


3. Set your Emulator to live reload changes `⌘`+`m`  (`cmd`+`m`) => `Enable Hot Reloading`

To open packager manually, from project dir run:

```sh
react-native start
```

