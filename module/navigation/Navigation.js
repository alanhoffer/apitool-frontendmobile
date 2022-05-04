import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useContext} from 'react';

// SCREENS
import HomeScreen from '../../Screens/HomeScreen';
import LoginScreen from '../../Screens/LoginScreen';
import RegisterScreen from '../../Screens/RegisterScreen';
import Dashboard  from '../../Screens/Dashboard';
import SplashScreen from '../../Screens/SplashScreen';

// CONTEXT
import { AuthContext } from '../auth/AuthContext';

const Stack = createNativeStackNavigator();

export default function Navigation() {

  const { userInfo, splashLoading } = useContext(AuthContext);


  return (
    <NavigationContainer>
      <Stack.Navigator  >
      { splashLoading ?  
      (
        // Splash Screen if is loading or checking if user is logged in
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
      ) : userInfo.access_token ? (
        // Dashboard if user is logged in
        <>
        <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
        </>
        ) : (   
        // Login Screen if user is not logged in
        <>
          <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false}} name="RegisterScreen" component={RegisterScreen} />
        </>
        )
      }

        
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
