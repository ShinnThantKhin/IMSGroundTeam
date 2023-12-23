import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import TicketComponent from './TicketRequest';
import HomeComponent from './Home';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

const HomeRoute = () => <HomeComponent/>;

const TicketsRoute = () => <TicketComponent/>;

const StatusRoute = () => <Text>Ticket Status</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const NavComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home'},
    { key: 'tickets', title: 'Ticket Request', focusedIcon: 'ticket'},
    { key: 'status', title: 'Ticket Status', focusedIcon: 'note'},
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    tickets: TicketsRoute,
    status: StatusRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      style={styles.bgWhite}
      color='white'
    />
  );
};

const styles = StyleSheet.create ({
  bgWhite: {
    color: 'white',
  },
});

export default NavComponent;