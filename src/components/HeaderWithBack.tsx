import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const COLOR_PALLETE = {
    primary: '#6022CD',
    secondary: '#FFFFFF',
    default: '#6b6efe4f'
};
const ICON_SIZE = 30;

const HeaderWithBack = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <FeatherIcon name="chevron-left" size={ICON_SIZE}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButton: {
        margin: 15,
        borderRadius: 400,
        backgroundColor: 'white',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
});


export { HeaderWithBack };