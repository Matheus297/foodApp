import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';


import Routes from './src/routes';

export const App = () => {
  return (
    <>
    <StatusBar translucent backgroundColor="#f8f8f9" barStyle="dark-content"/>
    <Routes />
    </>
  )
}



export default App;