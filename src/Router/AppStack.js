import React from 'react';
import {ToastAndroid, BackHandler, StyleSheet, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenName, Colors, Images, Responsive} from '../Theme';

import Home from '../MainFlow/Home/Home';
import Collection from '../MainFlow/Collection/Collection';
import Auction from '../MainFlow/Auction/Auction';
import Profile from '../MainFlow/Profile/Profile';
import Cart from '../MainFlow/Cart/Cart';



import {TabBarContainer, TabBarIcon , TabBarContainer2 , TabBarIcon2 , TabBarContainerView2} from '../styles/styles';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import App from '../../App';
import Svg, { Circle, Path } from "react-native-svg";
import QRCode from '../MainFlow/QRCode/QRCode';
import Details from '../MainFlow/Home/Details/Details';


// Main Navigation Flow
export default function AppStack(props) {
  const bgStyle = {backgroundColor: Colors.white};
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const DrawerStack = createDrawerNavigator();

  const setTabBarStyleForScreen = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    return styles.myTabBarStyle;
  };
  const setTabBarLabelStyleForScreen = route => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    return styles.labelContainer;
  };

  function AppBottomStack() {
    return (
      <Tab.Navigator
        backBehavior={ScreenName.AppRoot}
        screenListeners={async item => {
          // await AsyncStorage.setItem(Constants.asyncStorageKeys.UserRole, item.route.name);
          //   Constant.asyncStorageKeys.tabScreen = item.route.name;
        }}
        
        screenOptions={{
          headerShown: false,
          tabBarStyle: {},
        }}
        initialRouteName={ScreenName.HomeScreen}>
        <Tab.Screen
          name={ScreenName.HomeScreen}
          component={Home}
          options={({route}) => ({
            tabBarLabel: '',
            tabBarShowLabel: true,
            // unmountOnBlur: true,
            tabBarLabelStyle: (route => setTabBarLabelStyleForScreen(route))(
              route,
            ),
            tabBarStyle: (route => setTabBarStyleForScreen(route))(route),
            tabBarIcon: ({focused}) => {
              return (
                <TabBarContainer>
                  <TabBarIcon
                    source={focused ? Images.IconlyWithTint : Images.Iconly}
                  />
                </TabBarContainer>
              );
            },
          })}
        />
        

        <Tab.Screen
          name={ScreenName.Collection}
          component={Collection}
          options={({route}) => ({
            tabBarLabel: '',
            tabBarShowLabel: true,
            // unmountOnBlur: true,
            tabBarLabelStyle: (route => setTabBarLabelStyleForScreen(route))(
              route,
            ),
            tabBarStyle: (route => setTabBarStyleForScreen(route))(route),
            tabBarIcon: ({focused}) => {
              return (
                <TabBarContainer>
                  <TabBarIcon
                    source={focused ? Images.vuesaxWithTint : Images.vuesax}
                  />
                </TabBarContainer>
              );
            },
          })}
        />
        <Tab.Screen
          name={ScreenName.QRCode}
          component={QRCode}
          options={({route}) => ({
            tabBarLabel: '',
            tabBarShowLabel: true,
            // unmountOnBlur: true,
            tabBarLabelStyle: (route => setTabBarLabelStyleForScreen(route))(
              route,
            ),
            tabBarStyle: (route => setTabBarStyleForScreen(route))(route),
            tabBarIcon: ({focused}) => {
              return (
                <TabBarContainerView2>
                <TabBarContainer2>
                  <TabBarIcon2
                    source={Images.scanner }
                  />
                </TabBarContainer2>
                </TabBarContainerView2>

              );
            },
          })}
        />

        <Tab.Screen
          name={ScreenName.Auction}
          component={Auction}
          options={({route}) => ({
            tabBarLabel: '',
            tabBarShowLabel: true,
            // unmountOnBlur: true,
            tabBarLabelStyle: (route => setTabBarLabelStyleForScreen(route))(
              route,
            ),
            tabBarStyle: (route => setTabBarStyleForScreen(route))(route),
            tabBarIcon: ({focused}) => {
              return (
                <TabBarContainer>
                  <TabBarIcon
                    source={
                      focused
                        ? Images.messageNotifWithTint
                        : Images.messageNotif
                    }
                  />
                </TabBarContainer>
              );
            },
          })}
        />

        <Tab.Screen
          name={ScreenName.Profile}
          component={Profile}
          options={({route}) => ({
            tabBarLabel: '',
            tabBarShowLabel: true,
            // unmountOnBlur: true,
            tabBarLabelStyle: (route => setTabBarLabelStyleForScreen(route))(
              route,
            ),
            tabBarStyle: (route => setTabBarStyleForScreen(route))(route),
            tabBarIcon: ({focused}) => {
              return (
                <TabBarContainer>
                  <TabBarIcon
                    source={
                      focused ? Images.profileWithTint : Images.profileSec
                    }
                  />
                </TabBarContainer>
              );
            },
          })}
        />
      </Tab.Navigator>
    );
  }

  function AppDrawerStack() {
    return (
      <Drawer.Navigator
        initialRouteName={ScreenName.HomeScreen}
        // drawerContent={props => <SideMenu {...props} />}
        screenListeners={item => {
          //   Constant.commonConstant.emitter.emit(
          //     Constant.eventListenerKeys.tabChange,
          //     Constant.asyncStorageKeys.tabScreen,
          //   );
        }}
        screenOptions={{
          drawerStyle: {
            // backgroundColor: Colors.themeWhiteColor,
          },
          headerShown: false,
          drawerPosition: 'left',
        }}>
        <DrawerStack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={AppBottomStack}
        />
        <DrawerStack.Screen
          options={{
            headerShown: false,
          }}
          name="Cart"
          component={Cart}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AppDrawerStack"
        component={AppDrawerStack}
      />
       <Stack.Screen
       options={{
        headerShown: false,
      }}
        name={ScreenName.App}
        key={ScreenName.App}
        component={App}
        initial
      />
       <Stack.Screen
       options={{
        headerShown: false,
      }}
        name={ScreenName.Details}
        key={ScreenName.Details}
        component={Details}
        initial
      />
       <Stack.Screen
       options={{
        headerShown: false,
      }}
        name={ScreenName.Cart}
        key={ScreenName.Cart}
        component={Cart}
        initial
      />
        
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  myTabBarStyle: {
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    position: 'absolute',
    paddingTop:
      Platform.OS === 'ios'
        ? Responsive.heightPercentageToDP('0.5%')
        : Responsive.heightPercentageToDP('0.5%'),
    bottom: Responsive.heightPercentageToDP(0),
    backgroundColor: Colors.white,
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 24,
    shadowOffset: {
      width: 0,
      height: 15,
  },

  //  shadowColor: '#fff',
    height:
      Platform.OS === 'ios'
        ? Responsive.heightPercentageToDP('11%')
        : Responsive.heightPercentageToDP('7%'),
    width: Responsive.widthPercentageToDP('100%'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  noTabStyle: {
    display: 'none',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  labelContainer: {
    marginBottom: Responsive.heightPercentageToDP('0.5'),
    color: 'gray',
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
});
