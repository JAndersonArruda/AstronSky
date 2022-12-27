import { View, SafeAreaView } from 'react-native';
import React from 'react';

import { styles } from './styles';

const ImageGalerie = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.containerImageOne}></SafeAreaView>
            <SafeAreaView style={styles.containerImageTwo}></SafeAreaView>
            <SafeAreaView style={styles.containerImageThree}></SafeAreaView>
        </View>
  )
}

export default ImageGalerie