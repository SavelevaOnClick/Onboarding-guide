import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  // SCREEN PARAMS
Info: undefined
  Onboarding: undefined
  SignIn: undefined;
  Home: undefined;
};
// EXPORT SCREEN PARAMS
export type InfoRouteProp = RouteProp<RootStackParamList, 'Info'>;
export type OnboardingRouteProp = RouteProp<RootStackParamList, 'Onboarding'>;
export type SignInRouteProp = RouteProp<RootStackParamList, 'SignIn'>;
export type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;
