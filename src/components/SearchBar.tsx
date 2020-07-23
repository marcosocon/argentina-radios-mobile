import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

const COLOR_PALLETE = {
    primary: '#6022CD',
    secondary: '#FFFFFF',
    default: '#6b6efe4f'
};

const SearchBar = () => {
    return (
        <View>
            <TextInput style={styles.searchBar}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        paddingLeft: 10,
        backgroundColor: 'white',
        width: 300,
        height: 40,
        marginVertical: 15,
        marginHorizontal: 10,
        borderRadius: 25,
        color: COLOR_PALLETE.primary
    },
});


export { SearchBar };