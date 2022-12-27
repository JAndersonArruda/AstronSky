import { Text, View, Dimensions, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native-paper';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { styles } from './styles';


const SigUp = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const [email, setEmail] = useState('astronsky@gmail.com');
    const [senha, setSenha] = useState('astron123321');

    function cadastro() {
        const autor = getAuth();
        createUserWithEmailAndPassword(autor, email, senha)
            .then(() => {
                alert('Usuário cadastrado com sucesso');

                setEmail(null);
                setSenha(null);
            }).catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Este e-mail já foi cadastrado, tente novamente com outro e-mail')
                } else {
                    alert(error)
                }
            })
    }


    return (
        <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
            <Image
                source={require('../../../assets/logo-mark.png')}
                style={styles.imagem}
            />
            <View style={styles.formInfo}>
                <TextInput
                    style={styles.inputs}
                    placeholder='Usuário'
                />
                <TextInput
                    style={styles.inputs}
                    placeholder='Telefone'
                />
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.inputs}
                    placeholder='Email'
                // onChangeText={setEmail}
                // value={email}
                />
                <TextInput
                    style={styles.inputs}
                    secureTextEntry={true}
                    placeholder='Senha'
                // onChangeText={setSenha}
                // value={senha}
                />
                <TextInput
                    style={styles.inputs}
                    secureTextEntry={true}
                    placeholder='Confirmar Senha'
                />
                <Button
                    style={styles.botao}
                    textColor={'#ffffff'}
                    onPress={() => cadastro()}>Cadastrar
                </Button>
            </View>
            <View style={styles.nextSigIn}>
                <Text style={styles.nextText}>Já possuo uma conta. </Text>
                <Text
                    style={styles.nextTextAction}
                    onPress={() => navigation.navigate('SigIn')}>Login...
                </Text>
            </View>
        </View>
    )
}
export default SigUp
