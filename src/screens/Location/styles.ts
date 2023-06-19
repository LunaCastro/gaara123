import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'center',
    },
    map:{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height

    },
    searchContainer: {
      position: 'absolute',
      zIndex: 1,
      width: '90%',
      top: 10
    },
    searchInput: {
      height: 56,
      borderRadius: 7,
      borderWidth: 2,
      borderColor: colors.secondary,
    },
  });