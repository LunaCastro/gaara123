import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: "#BD8F65",
        backgroundColor: colors.third

    },
    panel: {
        flex: 1,
        marginTop: 40,
        margin: 20,
        borderRadius: 20,
        backgroundColor: colors.thirdLight
    },
    buttonSlider: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginBottom: 20
    }
});