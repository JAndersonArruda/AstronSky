import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Image,  Pressable } from "react-native";

import { styles } from "./styles";

const NavBar = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.areaNav}>
            <View style={styles.areaNavItens}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Image 
                        source={require('../../../assets/home.png')}
                        style={styles.imagem}
                    />
                </Pressable>
            </View>
            <View style={styles.areaNavItens}>
                <Pressable onPress={() => navigation.navigate('Galerie')}>
                    <Image 
                        source={require('../../../assets/galerie.png')}
                        style={styles.imagem}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default NavBar

