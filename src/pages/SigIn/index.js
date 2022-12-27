import { Text, View, Dimensions, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
import { Button } from 'react-native-paper';

import { styles } from './styles';

const SigIn = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
            <Image
                source={require('../../../assets/logo-mark.png')}
                style={styles.imagem}
            />
            <View style={styles.form}>
                <TextInput
                    style={styles.inputs}
                    placeholder='Email'
                />
                <TextInput 
                    style={styles.inputs} 
                    secureTextEntry={true}
                    placeholder='Senha'
                />

                <Button 
                    style={styles.botao} 
                    textColor={'#ffffff'} 
                    onPress={() => navigation.navigate('Home')}>Acessar
                </Button>
            </View>
            <View style={styles.nextSigUp}>
                <Text style={styles.nextText}>Não possuo uma conta. </Text>
                <Text 
                    style={styles.nextTextAction}
                    onPress={() => navigation.navigate('SigUp')}>Criar conta... 
                </Text>
            </View>
        </View>
    )
}

export default SigIn
