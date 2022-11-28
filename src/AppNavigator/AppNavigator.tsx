import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {TourGuideProvider} from 'rn-tourguide';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TooltipComponent} from '@components';
import {darkTheme, lightTheme} from '@constants';
import {useAppDispatch, useAppSelector} from '@hooks';
import {selectGlobal} from '@reducers/global';
import {
  Onboarding,
  Info, // ADD NEW SCREEN
} from '@screens';
import {navigationRef, onStateChange} from '@services';
import TabNavigator from './TabNavigator';
import {AuthNavigator} from './stacks/authNavigator';
import styles from './styles';

const RootStack = createNativeStackNavigator();

const ProviderConfig = {
  androidStatusBarVisible: true,
  tooltipComponent: TooltipComponent,
  borderRadius: 9,
  preventOutsideInteraction: false,
  startAtMount: 'first',
  maskOffset: 0,
  backdropColor: 'rgba(50, 50, 100, 0.5)',
  wrapperStyle: styles.tourGuideWrapper,
};
const AppNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  // const navigation = useNavigation();
  const {token} = useAppSelector(selectGlobal);
  const scheme = useColorScheme();

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <TourGuideProvider {...ProviderConfig}>
        <RootStack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
          {token ? (
            <RootStack.Screen name="HomeNavigator" component={TabNavigator} />
          ) : (
            <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
          )}
        </RootStack.Navigator>
      </TourGuideProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
