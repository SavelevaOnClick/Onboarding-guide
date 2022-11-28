import React from 'react';
import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Home, Info} from '@screens';
import styles from './styles';
import { TabBar } from '@components';
import { useCallback } from '@hooks';

const TabStack = createBottomTabNavigator();

type TProps = {};

const TabNavigator: React.FC<TProps> = () => {
      
  const tabBarRender = useCallback((prop: BottomTabBarProps) => <TabBar {...prop} />, []);
  return (
    <>
        <TabStack.Navigator
          initialRouteName={'MainStack'}
          tabBar={tabBarRender}
          screenOptions={{
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerTitleAlign: 'center',
          }}>
            
          <TabStack.Screen name={'Home'} component={Home} />
          <TabStack.Screen
            name={'Info'}
            component={Info}
            options={{
            }}
          />
        </TabStack.Navigator>
    </>
  );
};

export default TabNavigator;

