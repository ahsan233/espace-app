import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  LogBox,
  Image
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/Splash';
import SignIn from './screens/SignIn';
import ForgetPassword from './screens/ForgetPassword';
import Verification from './screens/Verification';
import ResetPassword from './screens/ResetPassword';
import SignUp from './screens/SignUp';
import CreateProfile from './screens/CreateProfile';
import PaymentMethod from './screens/PaymentMethod';
import HomeScreen from './screens/HomeScreen';
import Commisions from './screens/Commisions';
import SubscriptionPlans from './screens/SubscriptionPlans';
import Settings from './screens/Settings';
import TradeName from './screens/TradeName';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
LogBox.ignoreLogs(['Warning: ...']);
//Ignore all log notifications
LogBox.ignoreAllLogs();
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Tab = createBottomTabNavigator();

function MyTabs() {
     return (
      <Tab.Navigator
      screenOptions={{
       // tabBarInactiveTintColor:"#800000",
       // tabBarActiveTintColor:"#000000",
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
         // shadowColor: 'blue',
        height:hp('7.5%')
         
        },
      }}>
   
      <Tab.Screen options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              
        <View>
          <Image
          style={styles.home}
          source={require('./assets/images/homeactive.png')}
          resizeMode="contain"
        />
        <Text style={{marginTop:hp('-2.2%'),color:"#00C8BC",fontSize:hp('1.5%')}}>Home</Text>
        </View>
            ) : (
              <View>
              <Image
              style={styles.home}
              source={require('./assets/images/homeinactive.png')}
              resizeMode="contain"
            />
            <Text style={{marginTop:hp('-2.2%'),color:"#434343",fontSize:hp('1.5%')}}>Home</Text>
            </View>
            ),
        }}
       name="Home" component={HomeScreen} />
     

     <Tab.Screen options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              
        <View>
          <Image
          style={styles.home}
          source={require('./assets/images/tradactive.png')}
          resizeMode="contain"
        />
        <Text style={{marginTop:hp('-2.2%'),marginLeft:wp('-6%'),color:"#00C8BC"}}>Commisions</Text>
        </View>
            ) : (
              <View>
              <Image
              style={styles.home}
              source={require('./assets/images/tradeinactive.png')}
              resizeMode="contain"
            />
            <Text style={{marginTop:hp('-2.2%'),marginLeft:wp('-6%'),color:"#434343"}}>Commisions</Text>
            </View>
            ),
        }}
       name="Commisions" component={Commisions} />
       <Tab.Screen options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              
        <View>
          <Image
          style={styles.home}
          source={require('./assets/images/settingactive.png')}
          resizeMode="contain"
        />
        <Text style={{marginTop:hp('-2.2%'),marginLeft:wp('-3%'),color:"#00C8BC"}}>Settings</Text>
        </View>
            ) : (
              <View>
              <Image
              style={styles.home}
              source={require('./assets/images/inactivesetting.png')}
              resizeMode="contain"
            />
            <Text style={{marginTop:hp('-2.2%'),marginLeft:wp('-3%'),color:"#434343"}}>Settings</Text>
            </View>
            ),
        }}
       name="Settings" component={Settings} />
    </Tab.Navigator>
     )
}
const App = () => {
  const Stack = createStackNavigator();
  //const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeScreen"
//       activeColor="#002050"
//       barStyle={{ backgroundColor: '#ffffff' }}
//     >
//       <Tab.Screen
//         name='HomeScreen'
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           // tabBarIcon: ({ color }) => (
//           //   <FontAwesome5 name="clipboard-list" color={color} size={20} />
//           // ),
//         }}
//       />
//       <Tab.Screen
//         name="Commisions"
//         component={Commisions}
//         options={{
//           tabBarLabel: 'Commisions',
//           // tabBarIcon: ({ color }) => (
//           //   <FontAwesome5 name="clipboard-check" color={color} size={20} />
//           // ),
//         }}
//       />
    
//     </Tab.Navigator>
//   );
// }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animationEnabled: false}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="CreateProfile"
          component={CreateProfile}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
        name="SubscriptionPlans"
        component={SubscriptionPlans}
        options={{headerShown: false}}
      />
       
         <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="Commisions"
          component={Commisions}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="TradeName"
          component={TradeName}
          options={{headerShown: false}}
        />
         <Stack.Screen name='HomeScreen' component={MyTabs} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  home:{
    height: hp('8%'), // 70% of height device screen
    width: wp('8%'), // 80% of width device screen
    marginTop: hp('1%'),
  }
});

export default App;
