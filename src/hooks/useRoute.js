import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import LoginScreen from '../Screens/Auth/LoginScreen';
import Registration from '../Screens/Auth/RegistrationScreen';
import Home from '../Screens/Nested/Home';
import CreatePostsScreen from '../Screens/Main/CreatePostsScreen';
import ProfileScreen from '../Screens/Main/ProfileScreen';
import PostsScreen from '../Screens/Main/PostsScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Registration">
        <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={Registration}
        />
        <AuthStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={({ route, navigation }) => {
        console.log(navigation);
        // if (route.name === 'CreatePosts') {
        //   console.log('hurrey');
        // }
      }}
    >
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={require('../../assets/Images/grid.png')} />,
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: false,
          tabBarIcon: () => (
            <View style={styles.addBtn}>
              <Image source={require('../../assets/Images/Union.png')} />
            </View>
          ),
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={require('../../assets/Images/user.png')} />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 83,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    paddingBottom: 34,
    paddingTop: 9,
  },
  addBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 42,
    width: 70,
    height: 40,
    backgroundColor: '#FF6C00',
    borderRadius: 20,
  },
});
