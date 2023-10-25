import React from 'react';
import {ToastAndroid, BackHandler, StyleSheet} from 'react-native';
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
import {TabBarContainer, TabBarIcon} from '../styles/styles';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import App from '../../App';


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
            tabBarLabel: 'Home',
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
            tabBarLabel: 'Collections',
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
          name={ScreenName.Auction}
          component={Auction}
          options={({route}) => ({
            tabBarLabel: 'Auction',
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
            tabBarLabel: 'Profile',
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
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  myTabBarStyle: {
    position: 'absolute',
    paddingTop:
      Platform.OS === 'ios'
        ? Responsive.heightPercentageToDP('0.5%')
        : Responsive.heightPercentageToDP('0.5%'),
    bottom: Responsive.heightPercentageToDP(0),
    backgroundColor: Colors.black,
    shadowColor: Colors.black,
    height:
      Platform.OS === 'ios'
        ? Responsive.heightPercentageToDP('10%')
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
