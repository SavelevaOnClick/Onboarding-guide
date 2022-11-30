import React, {useCallback} from 'react';
import {TooltipProps} from 'rn-tourguide';
import {Pressable, Text, View} from '@components';
import {useAppDispatch} from '@hooks';
import {setGuideOrder} from '@reducers/additional';
import {goBack, navigate} from '@services';
import styles from './styles';
import { setFirstOpenApp } from '@reducers/global';

const TooltipComponent: React.ComponentType<TooltipProps> | undefined = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
}) => {
  const {tourKey} = currentStep.target._reactInternals._debugOwner.child.memoizedProps;
  const dispatch = useAppDispatch();

  const goPrevPartGuide = useCallback(() => {
    handleStop && handleStop();
    dispatch(setGuideOrder(3));
    navigate('Home');
  }, []);

  const goNextPartGuide = useCallback(() => {
    handleStop && handleStop();
    dispatch(setGuideOrder(null));
    navigate('Info');
  }, []);

  const setEnd = useCallback(() => {
    handleStop && handleStop();
    dispatch(setFirstOpenApp(false));
    goBack();
  }, []);

  if (tourKey === 'first') {
    return (
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{currentStep.text}</Text>
        </View>
        <View style={isFirstStep ? styles.buttonContainer : styles.buttonsContainer}>
          {!isFirstStep ? (
            <Pressable onPress={handlePrev} style={styles.button}>
              <Text>вернуться</Text>
            </Pressable>
          ) : null}
          <Pressable onPress={isLastStep ? goNextPartGuide : handleNext} style={styles.button}>
            <Text>дальше</Text>
          </Pressable>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{currentStep.text}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable onPress={goPrevPartGuide} style={styles.button}>
            <Text>вернуться</Text>
          </Pressable>
          <Pressable onPress={setEnd} style={styles.button}>
            <Text>конец</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

export default TooltipComponent;
