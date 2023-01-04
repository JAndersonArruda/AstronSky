import { FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { styles } from './styles';

// ainda não funciona ==> erro de requisição não encontrada

const API_KEY = 'DxG7EhjRS3oY1qBDoFS5xBsk6QjhDIwb4GUGIHpC';

const fetchImages = (query) => {
    return axios.get(`https://images-api.nasa.gov/search?q=${query}&media_type=image&api_key=${API_KEY}`);
}


const ImageGalerie = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages('mars')
        .then((response) => {
            setImages(response.data.collection.items);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);  // Chame a função fetchImages assim que a página é carregada

    return (
        <FlatList
            data={images}
            renderItem={({ item }) => (
                <Image
                    source={{ uri: item.links[0].href }}
                    style={{ width: 200, height: 200 }}
                />
            )}
            keyExtractor={(item) => item.nasa_id}
        />
    );
}


export default ImageGalerie