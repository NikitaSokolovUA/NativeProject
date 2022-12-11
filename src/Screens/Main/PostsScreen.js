import { createStackNavigator } from '@react-navigation/stack';
// import PostsScreen from '../Main/PostsScreen';
import MapScreen from '../Nested/MapScreen';
import CommentsScreen from '../Nested/CommentsScreen';
import Home from '../Nested/Home';

const NestedScreens = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedScreens.Navigator initialRouteName="Posts" screenOptions={{ headerShown: false }}>
      <NestedScreens.Screen name="Home" component={Home} />
      <NestedScreens.Screen name="Map" component={MapScreen} />
      <NestedScreens.Screen name="Comments" component={CommentsScreen} />
    </NestedScreens.Navigator>
  );
}
