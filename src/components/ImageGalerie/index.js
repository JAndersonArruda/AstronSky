import { FlatList, Image, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { styles } from './styles';


const API_KEY = 'DxG7EhjRS3oY1qBDoFS5xBsk6QjhDIwb4GUGIHpC';

const ImageGalerie = () => {
    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        axios.get(`https://images-api.nasa.gov/search?q=planet&media_type=image`)
            .then((Response) => {
                console.log(Response)
                setImagens(Response.data.collection.items);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <FlatList
            data={imagens}
            numColumns={3}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <Image source={{ uri: item.links[0].href }} style={styles.containerImageOne} />                    
                </View>
                // <Image
                //     source={{ uri: item.links[0].href }}
                //     style={{ width: 93, height: 74 }}
                // />
            )}
            keyExtractor={item => item.id_nasa}
        />
    );
}


export default ImageGalerie