import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import React from 'react';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI }: IPage) {
    const slide1 = require("../../assets/slide1.png")
    const slide1Texts = [
        { id: '1', text: '1. Doar alimentos não perecíveis e cesta básica.'},
        { id: '2', text: '2. Doar brinquedos.'},
        { id: '3', text: '3. Doar ração para animais.'},
        { id: '4', text: '4. Doar roupas e cobertores.'},
        
    ]
    return (
        <ImageBackground source={slide1} style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='O que doar para instituições de caridade?' />
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
                <ComponentButtonSlider onPressI={() => setPageI(2)} cor={true}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(4)} cor={false} />
            </View>
        </ImageBackground>
    );

}