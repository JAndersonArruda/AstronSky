import { Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import axios from 'axios';
// import { TextInput } from 'react-native-paper';

import { styles } from './styles'



const API_KEY = 'DxG7EhjRS3oY1qBDoFS5xBsk6QjhDIwb4GUGIHpC';

const searchImages = (query) => {
  return axios.get(`https://images.nasa.gov/search-results?q=${query}&page=1&media=image,video,audio&yearStart=1920&yearEnd=2023&api_key=${API_KEY}`)
}

const Search = () => {
  const searchIcon = require('../../../assets/search_icon-right.png')
  return (
    <View>
      <TextInput
        style={styles.areaSearch}
        placeholder='Search'
        left={<TextInput.Icon icon={searchIcon} />}// descobrir como colocar um icone aqui
      />
    </View>
  )
}

export default Search
