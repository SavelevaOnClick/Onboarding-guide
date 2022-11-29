import React from 'react';
import {TourGuideZone, useTourGuideController} from 'rn-tourguide';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TabActions} from '@react-navigation/native';
import {Icon, Pressable, SafeAreaView, Text, View} from '@components';
import {useCallback} from '@hooks';
import styles from './styles';


const TabBar: React.FC<BottomTabBarProps> = props => {
  const {navigation} = props;
  const {tourKey} = useTourGuideController('first');
  //   // const {state} = props;
  //   const activeIndex = props.state.index;

  const onPressTabBarIcon = useCallback(
    (screenName: string) => () => {
      const jumpToAction = TabActions.jumpTo(screenName);
      navigation.dispatch(jumpToAction);
    },
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barContainer}>
        <TourGuideZone
          zone={3}
          tourKey={tourKey}
          text="Это третья зона">
          <Pressable onPress={onPressTabBarIcon('Home')} style={styles.tabIconContainer}>
            <Icon name="home3" size={24} color="blue" />
          </Pressable>
        </TourGuideZone>
        <Pressable onPress={onPressTabBarIcon('Settings')} style={styles.tabIconContainer}>
          <Icon name="spades" size={24} color="yellow" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};


export default TabBar;
