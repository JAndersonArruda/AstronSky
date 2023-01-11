import { Text, View, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import NavBar from '../../components/NavBar';
import ImageObservatory from '../../components/ImageObservatory';


const Observatorio = () => {
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
                <Text style={styles.textSecao}>Observatorio</Text>
            </View>

            <ImageObservatory />

            <NavBar />
        </View>
  )
}

export default Observatorio
