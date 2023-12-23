import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import NavComponent from './src/components/BottomNavigation';
import LoginComponent from './src/components/LogIn';
import TicketComponent from './src/components/TicketRequest';
export default function Main() {
  return (
    <PaperProvider>
      {/* <LoginComponent/> */}
      <NavComponent/>
      {/* <TicketComponent/> */}
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);