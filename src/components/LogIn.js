import * as React from 'react';
import { Button, Card, Text, TextInput } from 'react-native-paper';
import { StyleSheet, View, Dimensions, ScrollView, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginComponent = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      keyboardShouldPersistTaps="handled"
    >
      <Card style={styles.container}>
        <Card.Content>
          <View style={styles.center}>
            <Image source={require('../img/logo.jpg')} style={styles.logo} />
            <Text variant="titleLarge">LOG IN</Text>
            <Text variant="bodyMedium">For Ground Team</Text>
          </View>
          <TextInput
            mode="outlined"
            label="Phone Number"
            placeholder='Enter Phone Number'
            value={phoneNumber}
            style={styles.spacing}
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          />
          <TextInput
            mode='outlined'
            label="Password"
            value={password}
            placeholder='Enter Password'
            onChangeText={password => setPassword(password)}
            style={styles.spacing}
          />
        </Card.Content>
        <Card.Actions>
          <View style={styles.btnContainer}>
            <Button mode='contained' style={styles.btn}>Login</Button>
          </View>
        </Card.Actions>
      </Card>
    </ScrollView>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: windowWidth * 0.05, 
    marginVertical: windowHeight * 0.2, 
    marginHorizontal: windowWidth * 0.05, 
    justifyContent: 'center',
    backgroundColor: '#fbf9fa',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: windowHeight * 0.02, 
  },
  spacing: {
    marginBottom: windowHeight * 0.02, 
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  logo:{
    width: windowWidth*0.6,
    height: windowHeight*0.05,
    marginVertical: windowHeight*0.01,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: windowHeight * 0.02, 
  },
  btn: {
    backgroundColor: '#000000',
  }
});

export default LoginComponent;
