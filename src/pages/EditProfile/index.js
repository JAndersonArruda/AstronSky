import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
            <Text>Tela de edição de Perfil</Text>

            <Button
                style={styles.botao}
                textColor={'#ffffff'}
                onPress={() => navigation.navigate('Profile')}>Voltar
            </Button>
        </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    botao: {
        marginTop: 10,
        padding: 5,
        backgroundColor: '#19BFB7',
    }
})
