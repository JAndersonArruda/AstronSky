import React from "react";
import {} from 'react-native-paper';
import { View, Text, Dimensions } from "react-native";

import NavBar from "../../components/NavBar";
import { styles } from "./styles";

const News = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
            <Text>Tela de Notícias</Text>
            <Text></Text>

            <NavBar />
        </View>
    )
}

export default News