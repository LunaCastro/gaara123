import { TouchableOpacity } from 'react-native'
import { styles } from './style'
import React from 'react'
export interface IBSlider {
    onPressI: () => void
}
export function ButtonSlider({ onPressI }: IBSlider) {
    return (
        <TouchableOpacity style = {styles.ball} onPress={onPressI} />
    )
}