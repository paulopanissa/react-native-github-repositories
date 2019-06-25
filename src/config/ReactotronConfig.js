import Reactotron from 'reactotron-react-native'

if(__DEV__) {
  const tron = Reactotron
    .configure({
      host: '192.168.15.3',
      name: "App: Access Github"
    }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect() // let's connect!

  tron.clear();

  console.tron = tron
}
