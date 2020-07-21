import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';


const COLOR_PALLETE = {
    primary: '#6022CD',
    secondary: '#FFFFFF',
    default: '#6b6efe4f'
};

const PlayerScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text> O </Text>
                </TouchableOpacity>
                <View style={styles.mainPanel}>
                </View>
                <View style={styles.controlsContainer}>
                    <TouchableOpacity>
                        <Text>play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>pause</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_PALLETE.primary,
        flex: 1,
    },
    backButton: {
        margin: 15,
        borderRadius: 400,
        backgroundColor: 'white',
        width: 40,
        height: 40,
    },
    mainPanel: {
        backgroundColor: COLOR_PALLETE.secondary,
        marginTop: 60,
        height: 400,
        marginHorizontal: 10,
        borderRadius: 25,
    },
    controlsContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        height: 50,
        borderRadius: 30,
        marginHorizontal: 50,
        marginTop: 40
    }
});

export { PlayerScreen }