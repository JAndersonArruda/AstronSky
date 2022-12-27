import { View, SafeAreaView } from 'react-native';
import React from 'react';

import { styles } from './styles';

const AreaImageDay = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.containerImage}></SafeAreaView>
        </View>
  )
}

export default AreaImageDay