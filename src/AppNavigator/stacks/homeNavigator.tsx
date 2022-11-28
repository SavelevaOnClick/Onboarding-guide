import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Info} from '@screens';

const HomeStack = createNativeStackNavigator();

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{}}>
      <HomeStack.Screen name="Home" component={Home} options={{}} />
      <HomeStack.Screen name="Info" component={Info} />
    </HomeStack.Navigator>

  );
};


