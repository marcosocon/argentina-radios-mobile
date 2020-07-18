import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const COLOR_PALLETE = {
    primary: '#6022CD',
    secondary: '#FFFFFF',
    default: '#6b6efe4f'
};

const StationCard = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Player')}>
            <View style={styles.itemContainer}>
                <View>
                    <Image
                        style={styles.stationLogo}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.stationName}>Title name2</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: COLOR_PALLETE.default,
        borderColor: COLOR_PALLETE.default,
        borderRadius: 20,
        borderWidth: 2,
        height: 70,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    stationLogo: {
        marginHorizontal: 20,
        width: 50,
        height: 50,
    },
    stationName: {
        fontSize: 17,
        fontFamily: 'Raleway-Bold'
    }
});


export { StationCard };