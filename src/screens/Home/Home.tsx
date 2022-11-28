import React from 'react';
import {StyleSheet} from 'react-native';
import {TourGuideZone, useTourGuideController} from 'rn-tourguide';
import {View, Text, Image, TouchableOpacity, Pressable} from '@components';
import {width} from '@constants';
import {
  useEffect,
  useState,
  useTranslation,
  useRoute,
  useAppDispatch,
  useAppSelector,
  useTheme,
  useNavigation,
} from '@hooks';
import {navigate} from '@services';
import {HomeRouteProp} from '@types';
import styles from './styles';

const Home: React.FC = () => {
  const {t} = useTranslation();
  const {params} = useRoute<HomeRouteProp>();
  const dispatch = useAppDispatch();
  // const data = useAppSelector(selectData);
  const {colors} = useTheme();
  const {canStart, start, tourKey, eventEmitter} = useTourGuideController('first');

  React.useEffect(() => {
    if (canStart) {
      start(1);
    }
  }, [canStart]);

  const handleOnStop = () => {
    navigate('Info');
  };

  React.useEffect(() => {
    eventEmitter?.on('stop', handleOnStop);

    return () => {
      eventEmitter?.off('stop', handleOnStop);
    };
  }, [eventEmitter]);

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <View style={styles.guideZoneFirstContentContainer}>
          <TourGuideZone
            maskOffset={-15} //TODO: what is the parameter
            style={styles.guideZoneFirst}
            zone={1}
            tourKey={tourKey}
            text="это первая зона">
            <Pressable style={styles.buttonContainer}>
              <Text>
                <Text style={styles.title}>150</Text>бонусов
              </Text>
            </Pressable>
          </TourGuideZone>
        </View>
        <Pressable style={styles.buttonContainer}>
          <View>
            <Text style={styles.title}>+</Text>
          </View>
          <Text>добавить любимые товары</Text>
        </Pressable>
      </View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates repellendus nam odio? Ea
          dignissimos eius, odio sed officiis unde repellendus saepe, ratione dicta, alias nam excepturi inventore fugit
          nemo!
        </Text>
      </View>

      <TourGuideZone style={styles.guideZoneSecond} tourKey={tourKey} zone={2} text="Это вторая зона">
        <View style={styles.guideZoneSecondContentContainer}>
          <Text>Second</Text>
        </View>
      </TourGuideZone>
    </View>
  );
};

export default Home;
