import React from 'react';
import {TourGuideProvider} from 'rn-tourguide';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar, TooltipComponent} from '@components';
import {useCallback} from '@hooks';
import {Settings} from '@screens';
import {HomeNavigator} from './stacks/homeNavigator';
import styles from './styles';

 const ProviderConfig = {
  androidStatusBarVisible: true,
  tooltipComponent: TooltipComponent,
  borderRadius: 9,
  preventOutsideInteraction: false,
  maskOffset: 0,
  backdropColor: 'rgba(50, 50, 100, 0.5)',
  wrapperStyle: styles.tourGuideWrapper,
};
const TabStack = createBottomTabNavigator();

type TProps = {};

const TabNavigator: React.FC<TProps> = () => {
  const tabBarRender = useCallback((prop: BottomTabBarProps) => <TabBar {...prop} />, []);


  return (
    <>
      <TourGuideProvider {...ProviderConfig}>
        <TabStack.Navigator
          initialRouteName={'MainStack'}
          tabBar={tabBarRender}
          screenOptions={{
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerTitleAlign: 'center',
            headerShown: false,
          }}>
          <TabStack.Screen name={'HomeNavigator'} component={HomeNavigator}  options={{}}/>
          <TabStack.Screen name={'Settings'} component={Settings} options={{}} />
        </TabStack.Navigator>
      </TourGuideProvider>
    </>
  );
};

export default TabNavigator;
