import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigation from './src/navigation/MainNavigation';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import ToastManager from 'toastify-react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <ToastManager />
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <MainNavigation />
      </ApplicationProvider>
    </SafeAreaView>
  );
}

export default App;
