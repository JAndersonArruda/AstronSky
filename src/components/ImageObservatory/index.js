import { FlatList, Image, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { styles } from './styles';

const API_KEY = 'DxG7EhjRS3oY1qBDoFS5xBsk6QjhDIwb4GUGIHpC';

const ImageObservatory = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`https://images-api.nasa.gov/search?q=solar%20system&media_type=image`)
            .then((Response) => {
                console.log(Response)
                setPhotos(Response.data.collection.items);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <FlatList
            data={photos}
            numColumns={3}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <Image source={{ uri: item.links[0].href }} style={styles.containerImageOne} />  
                </View>
            )}
            keyExtractor={item => item.id_nasa}
        />
    );
}


export default ImageObservatory