import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import React from 'react';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './style';
export function Slider4({ setPageI }: IPage) {
    const slide1 = require("../Slider4/style")
    const slide1Texts = [
        { id: '1', text: '1. One Simple Wish.'},
        { id: '2', text: '2. UNICEF.'},
        { id: '3', text: '3. Viva Cazuza.'},
        { id: '4', text: '4. Projeto romper.'},
    ]
    return (

        <ImageBackground style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Exemplos de instituições:' />
                <FlatList
                    data={slide1Texts}
                    renderItem={({ item }) =>
                        <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(2)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(4)} cor={true}/>
                <ComponentButtonSlider onPressI={() => setPageI(5)} cor={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(6)} cor={false}/>
            </View>
        </ImageBackground>
    );

}