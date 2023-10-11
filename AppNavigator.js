import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="screen1"
          component={Screen1}
          options={{
            headerTitle: 'Account Aggregator',
            headerTitleAlign: 'center', // Center align the title for this screen
            headerStyle: {
              backgroundColor: '#FCE04E', // Specify your desired background color here
            },
          }}
        />
        <Stack.Screen
          name="screen2"
          component={Screen2}
          options={{
            headerTitle: 'Account Details',
            headerTitleAlign: 'center', // Center align the title for this screen
            headerStyle: {
              backgroundColor: '#FCE04E', // Specify your desired background color here
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
