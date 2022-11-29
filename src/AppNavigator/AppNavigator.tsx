import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TooltipComponent} from '@components';
import {darkTheme, lightTheme} from '@constants';
import {useAppDispatch, useAppSelector} from '@hooks';
import {selectGlobal} from '@reducers/global';
import {navigationRef, onStateChange} from '@services';
import TabNavigator from './TabNavigator';
import {AuthNavigator} from './stacks/authNavigator';
import styles from './styles';

const RootStack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  // const navigation = useNavigation();
  const {token} = useAppSelector(selectGlobal);
  const scheme = useColorScheme();

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
        <RootStack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
          {token ? (
            <>
            <RootStack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} />
            </>
          ) : (
            <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
          )}
        </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
