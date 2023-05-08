import { View, Text } from "react-native";
import { ComponentButtoninterface } from "../../components";
import { TabTypes } from "../../navigations/tab.navigation";
import { styles } from "./style";


export function Perfil({ navigation }: TabTypes){
    function handleVoltar(){
        const tab = navigation.getParent()
        tab?.goBack()
    }
    return(
        <View style={styles.container}>
            <Text>Perfil</Text>
            <ComponentButtoninterface  title="Voltar" type="primary" onPressI={handleVoltar}></ComponentButtoninterface>
        </View>
    )
}
