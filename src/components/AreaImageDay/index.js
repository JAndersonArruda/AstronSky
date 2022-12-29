import { View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { styles } from './styles';



const AreaImageDay = () => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=9pNRkT9uaF65RmA6K1Me0ngehhhFEItOeLp67lrb`)
        .then(Response => {
            setImageUrl(Response.data.url);
        })
        .catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <View style={styles.container}>
            {imageUrl && (
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.containerImage}
                />
            )}
        </View>
  )
}

export default AreaImageDay