import { View, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

import { styles } from './styles';

const Preload = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
            <Image
                source={require('../../../assets/logo-white.png' )}
                style={styles.imagem}
            />
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Image
                    source={require('../../../assets/preload.png' )}
                    style={styles.imagemNext}
                />       
            </Pressable>
        </View>
    )
}

export default Preload
