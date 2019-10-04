import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .connect();

  console.tron = tron;
}
