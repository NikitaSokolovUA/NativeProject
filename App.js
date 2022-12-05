import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Screens/LoginScreen";
import Registration from "./src/Screens/RegistrationScreen";
import PostsScreen from './src/Screens/PostsScreen'
import CreatePosts from "./src/Screens/CreatePostsScreen";
import CommentsScreen from "./src/Screens/CommentsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

const MainStack = createStackNavigator()

export default function App() {

  return <NavigationContainer>
    <MainStack.Navigator initialRouteName="Profile">
      <MainStack.Screen name="Login" component={Login}/>
      <MainStack.Screen name="Registration" component={Registration}/>
      <MainStack.Screen name='Posts' component={PostsScreen} />
      <MainStack.Screen name='CreatePosts' component={CreatePosts} />
      <MainStack.Screen name='Comments' component={CommentsScreen} />
      <MainStack.Screen name='Profile' component={ProfileScreen} />
    </MainStack.Navigator>
  </NavigationContainer>

}

