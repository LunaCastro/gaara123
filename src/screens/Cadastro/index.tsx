import React from 'react';
import { View, KeyboardAvoidingView, Text, TextInput } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtoninterface } from "../../components"

export function Cadastro() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>

                <Text style={styles.title}>Cadastre-se</Text>
                <View style={styles.formRow}>
                    <FontAwesome name="user" size={24} color="#FF1493" />
                    <TextInput
                        placeholder='Usuário'
                        placeholderTextColor={colors.third}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
                    />
                </View>
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
                <ComponentButtoninterface title="Salvar" type="primary" onPressI={() => (navigation.navigate("Cadastro"))} />
                <ComponentButtoninterface title="Voltar" type="secondary" onPressI={() => (("Login"))} />
            </KeyboardAvoidingView>
        </View>
    )
}