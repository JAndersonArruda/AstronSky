import { FlatList, Image, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { styles } from './styles';

// ainda não funciona ==> erro de indefinição de parametro 'items' ---> linha 22

const API_KEY = 'DxG7EhjRS3oY1qBDoFS5xBsk6QjhDIwb4GUGIHpC';

const fechImagens = (query) => {
    return axios.get(`https://images.nasa.gov/search?q=${query}&api_key=${API_KEY}`)
}

const ImageGalerie = () => {
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
            renderItem={({ item }) => (
                <View>
                    <Image source={{ uri: item.img_src }} style={{width: 93, height: 74}} />
                    <Text>{item.id}</Text>
                    <Text>{item.camera.name}</Text>
                    <Text>{item.rover.name}</Text>
                </View>
                // <Image
                //     source={{ uri: item.links[0].href }}
                //     style={{ width: 93, height: 74 }}
                // />
            )}
            keyExtractor={item => item.id}
        />
    );
}


export default ImageGalerie