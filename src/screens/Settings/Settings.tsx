import React from 'react'
import { useEffect, useState, useCallback, useMemo, useTranslation, useRoute, useAppDispatch, useAppSelector, useTheme } from '@hooks'
import { View, Text, Image, TouchableOpacity } from '@components'
import {navigate} from '@services';
import {SettingsRouteProp} from '@types';
import styles from './styles'

const Settings: React.FC = () => {
	const { t } = useTranslation()
	const {params} = useRoute<SettingsRouteProp>();
	const dispatch = useAppDispatch();
    // const data = useAppSelector(selectData);
	const {colors} = useTheme();

	return (
		<View style={styles.container}>
			<Text>
				SettingsScreen
			</Text>
		</View>
	)
}

export default Settings;