import { Text, View, Image, TextInput } from 'react-native'
import React from 'react'
// import { TextInput } from 'react-native-paper';

import { styles } from './styles'

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
