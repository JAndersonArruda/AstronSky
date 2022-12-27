import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import NavBar from '../../components/NavBar';

const Profile = () => {
    const navigation =useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height
    return (
        <View style={[styles.container, { width: screenWidth, height:screenHeight }]}>
            <Text>Tela de Profile</Text>
            <Button
                onPress={() => navigation.navigate('EditProfile')}
                style={styles.edentText}>Editar Perfil
            </Button>

            <NavBar />
        </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    edentText: {
        marginBottom: 70,
        backgroundColor: '#19BFB7',
        color: '#ffffff',
    }
})