import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import React from 'react';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider3({ setPageI }: IPage) {
    const slide1 = require("../../assets/slide1.png")
    const slide1Texts = [
        { id: '1', text: '1. sites de campanhas.'},
        { id: '2', text: '2. Para amigos próximos.'},
        { id: '3', text: '3. Nas própias intituições.'},
        { id: '4', text: '4. Em pontos de coleta específicos.'},
    ]
    return (
        <ImageBackground style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Por onde doar?' />
                <FlatList
                    data={slide1Texts}
                    renderItem={({ item }) =>
                        <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} cor={false} />
                <ComponentButtonSlider onPressI={() => setPageI(2)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} cor={true} />
                <ComponentButtonSlider onPressI={() => setPageI(4)} cor={false}/>
            </View>
        </ImageBackground>
    );

}