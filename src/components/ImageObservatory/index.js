import { FlatList, Image, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { styles } from './styles';


const API_KEY = 'DxG7EhjRS3oY1qBDoFS5xBsk6QjhDIwb4GUGIHpC';

const ImageObservatory = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}`)
            .then((Response) => {
                setPhotos(Response.data.photos);
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
                    <Image source={{ uri: item.img_src }} style={styles.containerImageOne} />
                    <View style={styles.text}>
                        <Text>{item.id}</Text>
                        <Text>{item.camera.name}</Text>
                        <Text>{item.rover.name}</Text>
                    </View>
                </View>
            )}
            keyExtractor={item => item.id}
        />
    );
}


export default ImageObservatory