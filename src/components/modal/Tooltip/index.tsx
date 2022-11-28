import React from 'react';
import {TooltipProps} from 'rn-tourguide';
import {Pressable, Text, View} from '@components';
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
  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{currentStep.text}</Text>
      </View>

      <View style={isFirstStep ? styles.buttonContainer : styles.buttonsContainer}>
        {!isFirstStep ? (
          <Pressable onPress={tourKey === 'second' ? handleStop : handlePrev} style={styles.button}>
            <Text>вернуться</Text>
          </Pressable>
        ) : null}
        <Pressable onPress={isLastStep ? handleStop : handleNext} style={styles.button}>
          <Text>
            {currentStep.target._reactInternals._debugOwner.child.memoizedProps.tourKey === 'second'
              ? 'конец'
              : 'дальше'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TooltipComponent;
