import { createStackNavigator } from '@react-navigation/stack';
import PostsScreen from '../Main/PostsScreen';
import MapScreen from './MapScreen';
import CommentsScreen from './CommentsScreen';

const NestedScreens = createStackNavigator();

export default function Home() {
  return (
    <NestedScreens.Navigator>
      <NestedScreens.Screen options={{ headerShown: false }} name="Posts" component={PostsScreen} />
      <NestedScreens.Screen name="Map" component={MapScreen} />
      <NestedScreens.Screen name="Comments" component={CommentsScreen} />
    </NestedScreens.Navigator>
  );
}
