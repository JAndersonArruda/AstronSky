import { FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { styles } from './styles';

// ainda não funciona ==> erro de indefinição de parametro 'items' ---> linha 22

const API_KEY = 'DxG7EhjRS3oY1qBDoFS5xBsk6QjhDIwb4GUGIHpC';

const fechImagens = (query) => {
    return axios.get(`https://images.nasa.gov/search?q=${query}&api_key=${API_KEY}`)
}

const ImageGalerie = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fechImagens('mars')
        .then((Response) => {
            setImages(Response.data.collection.items);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    return (
        <FlatList
            data={images}
            renderItem={({ item }) => (
                <Image
                    source={{ uri: item.links[0].href }}
                    style={{ width: 93, height: 74 }}
                />
            )}
            keyExtractor={(item) => item.nasa_id}
        />
    );
}


export default ImageGalerie