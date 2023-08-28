import React, { useEffect, useState } from 'react';
import { View, KeyboardAvoidingView, Text, TextInput, Alert } from "react-native"
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { ComponentButtoninterface } from "../../components"
import { LoginTypes } from '../../navigations/login.navigation';
import { IRegister } from '../../services/data/User';
import { apiUser } from '../../services/data';
import { AxiosError } from 'axios';
import { ComponentLoading } from '..';


export interface IErrorApi {
    errors: any;
    rule: string
    field: string
    message: string
}[]
export function Cadastro({navigation}: LoginTypes) {
        const [data, setData] = useState<IRegister>()
        const [isLoading, setIsLoading] = useState(true)
        async function handleRegister() {
            try{
                setIsLoading(true)
                if(data?.name && data.email && data.password){
                    const response = await apiUser.register(data)
                    Alert.alert(`${response.data.name} cadastradoooo`)
                    setIsLoading(false)
                    navigation.navigate('Login')
                }else{
                    Alert.alert("Preencha todos os campos")
                }
            }catch(error){
                const err = error as AxiosError
                const errorData = err.response?.data as IErrorApi
                let message = ""
                if(errorData){
                    for (const iterator of errorData.errors) {
                        message = `${message} ${iterator.message} \n`
                    }
                }
            }finally{
                setIsLoading(false)
            }
        }
        function handleChange(item:IRegister){
            setData({...data, ...item})
        }
        useEffect(() => {
            setTimeout(() => {
                setIsLoading(false)
            },2000)
        },[])
    
    return (
        <>
            {isLoading ? (
                <ComponentLoading />
            ) : (

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
                        onChangeText={(i)=> handleChange({name:i})}
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
                        onChangeText={(i)=> handleChange({email:i})}
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
                        onChangeText={(i)=> handleChange({password:i})}
                    />
                </View>
                <ComponentButtoninterface title="Salvar" type="primary" onPressI= {handleRegister} />
                <ComponentButtoninterface title="Voltar" type="secondary" onPressI={() => (navigation.navigate("Login"))} />
            </KeyboardAvoidingView>
        </View>
    )}
    </>
    );
            }
