import { Text, View, Image, Dimensions, ScrollView } from 'react-native';
import React from 'react';

import { styles } from './styles';
import NavBar from '../../components/NavBar';
import Search from '../../components/Search';
import AreaViewHome from '../../components/AreaViewHome';
import AreaImageDay from '../../components/AreaImageDay';


const Home = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={[styles.container, { width: screenWidth, height: screenHeight }]}>
            <View style={styles.containerSearch}>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/logo-home.png')}
                    />
                </View>
                
                <Search />
            </View> 
            <View style={styles.edentText}>
                <Image
                    style={styles.imageSecao}
                    source={require('../../../assets/trend.png')}
                />
                <Text style={styles.textSecao}>Trend</Text>
            </View>
                
            <AreaViewHome />

            <View style={styles.edentText}>
                <Image
                    style={styles.imageSecao}
                    source={require('../../../assets/image-day.png')}
                />
                <Text style={styles.textSecao}>Imagem do Dia</Text>
            </View>

            <AreaImageDay />


            <NavBar />
        </View>
    )
}
export default Home
