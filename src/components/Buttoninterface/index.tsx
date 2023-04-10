import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import { styles } from './style'
import React from 'react'

export interface IBinterface {
    onPressI: () => void
   title: string
   type: 'primary' | 'secondary' | 'third' |'black'
} 
export function Buttoninterface({ onPressI, title, type, ...rest}: IBinterface) {
    return (
        <TouchableOpacity style ={
            type== 'primary' ? styles.buttonPrimary
            :type== 'secondary' ? styles.buttonSecondary
            :type== 'black' ? styles.buttonBlack
            :styles.buttonWhite
        } onPress={onPressI} {...rest}>
        
            <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
    )
}