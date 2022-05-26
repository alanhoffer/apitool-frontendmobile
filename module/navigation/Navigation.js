import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useContext} from 'react';

// SCREENS
import HomeScreen from '../../UI/Screens/HomeScreen';
import LoginScreen from '../../UI/Screens/LoginScreen';
import RegisterScreen from '../../UI/Screens/RegisterScreen';
import DashboardScreen  from '../../UI/Screens/DashboardScreen';
import SplashScreen from '../../UI/Screens/SplashScreen';
import TermConScreen from '../../UI/Screens/TermConScreen';
import NoticeScreen from '../../UI/Screens/NoticeScreen';
import ProfileScreen from '../../UI/Screens/ProfileScreen';
import ApiariesScreen from '../../UI/Screens/ApiariesScreen';
import AddApiaryScreen from '../../UI/Screens/AddApiaryScreen';

// SCREENS OPTIONS
import { DashboardHeader } from '../../UI/HeadersOptions/DashboardHeader';
import { NoticeHeader } from '../../UI/HeadersOptions/NoticeHeader';
import { ProfileHeader } from '../../UI/HeadersOptions/ProfileHeader';
import { ApiariesHeader } from '../../UI/HeadersOptions/ApiariesHeader';
import { AddApiariesHeader } from '../../UI/HeadersOptions/AddApiariesHeader';

// CONTEXT
import { AuthContext } from '../Auth/AuthContext';

const Stack = createNativeStackNavigator();

export default function Navigation() {

  const { sessionInfo, splashLoading } = useContext(AuthContext);


  return (
    <NavigationContainer>
      <Stack.Navigator  >
      { splashLoading ?  
      (
        // Splash Screen if is loading or checking if user is logged in
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
      ) : sessionInfo.access_token ? (
        // Dashboard if user is logged in
        <>
        <Stack.Screen options={DashboardHeader} name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen options={NoticeHeader} name="NoticeScreen" component={NoticeScreen} />
        <Stack.Screen options={ProfileHeader} name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen options={ApiariesHeader} name="ApiariesScreen" component={ApiariesScreen} />
        <Stack.Screen options={AddApiariesHeader} name="AddApiaryScreen" component={AddApiaryScreen} />
        </>
        ) : (   
        // Login Screen if user is not logged in
        <>
          <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false}} name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen options={{headerShown: false}} name="TermConScreen" component={TermConScreen} />
        </>
        )
      }

        
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
