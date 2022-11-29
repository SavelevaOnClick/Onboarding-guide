import React, {useCallback} from 'react';
import {TooltipProps} from 'rn-tourguide';
import {Pressable, Text, View} from '@components';
import {useAppDispatch} from '@hooks';
import {setGuideOrder} from '@reducers/additional';
import {goBack, navigate} from '@services';
import styles from './styles';

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
    goBack();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{currentStep.text}</Text>
      </View>
      <View style={isFirstStep && tourKey === 'first' ? styles.buttonContainer : styles.buttonsContainer}>
        {!isFirstStep || (isFirstStep && tourKey === 'second') ? (
          <Pressable onPress={tourKey === 'second' ? goPrevPartGuide : handlePrev} style={styles.button}>
            <Text>вернуться</Text>
          </Pressable>
        ) : null}
        <Pressable
          onPress={
            isLastStep && tourKey === 'second'
              ? setEnd
              : isLastStep && tourKey === 'first'
              ? goNextPartGuide
              : handleNext
          }
          style={styles.button}>
          <Text>{tourKey === 'second' ? 'конец' : 'дальше'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TooltipComponent;
