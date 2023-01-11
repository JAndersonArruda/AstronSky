import { View, Image, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { styles } from './styles';


const API_KEY = 'DxG7EhjRS3oY1qBDoFS5xBsk6QjhDIwb4GUGIHpC';

const AreaImageDay = () => {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(Response => {
            setImageData(Response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    return (
        <View style={styles.container}>
            {imageData && (
                <>
                    <Image source={{ uri: imageData.url }} style={styles.containerImage} />
                    <Text style={styles.fonte}>{imageData.title}</Text>
                </> 
            )}
        </View>
    )
}

export default AreaImageDay