import React from 'react';
import {TourGuideZone, useTourGuideController} from 'rn-tourguide';
import {View, Text} from '@components';
import {useTranslation, useRoute, useAppDispatch, useCallback, useTheme, useAppSelector} from '@hooks';
import {InfoRouteProp} from '@types';
import styles from './styles';

const Info: React.FC = () => {
  const {t} = useTranslation();
  const {params} = useRoute<InfoRouteProp>();
  const {firstOpenApp} = useAppSelector(state => state.global);

  const dispatch = useAppDispatch();
  const {canStart, start, tourKey} = useTourGuideController('second');

  const startGuide = useCallback(() => firstOpenApp && canStart && start(1), [canStart, firstOpenApp, start]);

  return (
    <View style={styles.container} onLayout={startGuide}>
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptates repellendus nam odio? Ea
          dignissimos eius, odio sed officiis unde repellendus saepe, ratione dicta, alias nam excepturi inventore fugit
          nemo!
        </Text>
      </View>
      <View style={styles.guideZoneContainer}>
        <TourGuideZone
          style={{
            padding: 5,
          }}
          tourKey={tourKey}
          zone={1}
          text="Это четвертая зона">
          <View style={styles.guideZoneContent}>
            <Text>Second</Text>
          </View>
        </TourGuideZone>
      </View>
    </View>
  );
};

export default Info;
