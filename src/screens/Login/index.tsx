import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, Alert } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtoninterface } from "../../components";
import { IPage } from '../../../App';
import { LoginTypes } from '../../navigations/login.navigation';
import { Navigation } from '../../navigations';
import { useAuth } from '../../hooks/auth';
import { AxiosError } from 'axios';
import { IAuthenticate } from '../../services/data/User';


export function Login({navigation}:LoginTypes) {
    const { signIn } = useAuth();
    const [data,setData] = useState<IAuthenticate>();
    const [isLoading, setIsLoading] = useState(true);
    async function handleSignIn(){
        try{
            setIsLoading(true);
            if(data?.email && data.password){
                await signIn(data);
            } else {
                Alert.alert("Preencha todos os campos");
                setIsLoading(false);
            }
        }catch(error){
            const err = error as AxiosError;
            const message = err.response?.data as string
            Alert.alert(message)
            setIsLoading(false)
        }
    }
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