import React from 'react';

import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainLayout from './src/containers/MainLayout';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainLayout />
    </SafeAreaProvider>
  );
};

export default App;
