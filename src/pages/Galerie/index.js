import { StyleSheet, Text, View, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import NavBar from '../../components/NavBar';
import ImageGalerie from '../../components/ImageGalerie';


const Galerie = () => {
    const navigation = useNavigation();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
            
            <View style={styles.containerTop}>
                <View style={styles.edentImage}>
                    <Pressable onPress={() => navigation.navigate('Home')}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/returne.png')}
                        />
                    </Pressable>
                </View>
                    
                <View style={styles.containerImage}>
                    <Image
                        style={styles.imageLogo}
                        source={require('../../../assets/logo-mark.png')}
                    />
                </View>
            </View>
            

            <View style={styles.edentText}>
                <Image
                    style={styles.imageSecao}
                    source={require('../../../assets/galerie-icon.png')}
                />
                <Text style={styles.textSecao}>Galeria</Text>
            </View>

            <ImageGalerie />

            <NavBar />
        </View>
  )
}

export default Galerie

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    containerTop: {
        flexDirection: 'row',
    },
    containerImage: {
        borderBottomColor: '#19BfB7',
        borderBottomWidth: 0.5,
    },
    image: {
        width: 35,
        height: 35,
    },
    edentImage: {
        marginLeft: 78,
    },
    imageLogo: {
        width: 131,
        height: 46.16,
    },
    edentText: {
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 45,
        marginBottom: 5,
    },
    textSecao: {
        marginLeft: 8,
        color: '#19BFB7',
    },
    imageSecao: {
        width: 23,
        height: 23,
    }
})
