import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    buttonPrimary:{
        backgroundColor: colors.primary,
        borderRadius: 5,
        margin:10,
    },
    buttonSecondary:{
        backgroundColor: colors.secondary,
        borderRadius: 5,
        margin:10,
    },
    buttonBlack:{
        backgroundColor: colors.black,
        borderRadius: 5,
        margin:10,
    },
    buttonWhite:{
        backgroundColor: colors.white,
        borderRadius: 5,
        margin:10,
    },
    text:{
        fontSize:18,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        color: colors.white,

    }
})