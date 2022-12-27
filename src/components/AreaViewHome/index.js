import { Text, View, SafeAreaView } from 'react-native';
import React from 'react';

import { styles } from './styles';

const AreaViewHome = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.containerLeft}></SafeAreaView>
            <SafeAreaView style={styles.containerRight}></SafeAreaView>
        </View>
  )
}

export default AreaViewHome