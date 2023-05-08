import React from 'react';
import { View, KeyboardAvoidingView, Text, TextInput } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtoninterface } from "../../components"
import { IPage } from '../../../App';
import { LoginTypes } from '../../navigations/login.navigation';
import { Navigation } from '../../navigations';

export function Login({navigation}: LoginTypes) {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formRow}>
                    <MaterialIcons name="email" style={styles.icon} />
                    <TextInput
                        placeholder='e-mail'
                        placeholderTextColor={colors.third}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
                <View style={styles.formRow}>
                    <Ionicons name="key" size={24} color="#FF1493" />
                    <TextInput
                        placeholder='senha'
                        placeholderTextColor={colors.third}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}

                    />
                </View>
                <ComponentButtoninterface title="Entrar" type="primary" onPressI={() => (navigation.navigate("Tab"))} />
                <ComponentButtoninterface title="Cadastre-se" type="secondary" onPressI={() => (navigation.navigate("Cadastro"))} />
            </KeyboardAvoidingView>
        </View>
    )
}