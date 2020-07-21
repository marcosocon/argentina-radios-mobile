import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
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

const ICON_SIZE = 30;

const PlayerScreen = ({ navigation } : any) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <FeatherIcon name="chevron-left" size={ICON_SIZE}/>
                </TouchableOpacity>
                <View style={styles.mainPanel}>
                </View>
                <View style={styles.controlsContainer}>
                    <TouchableOpacity>
                        <FeatherIcon name="play" size={ICON_SIZE}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FeatherIcon name="stop-circle" size={ICON_SIZE}/>
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
        alignItems: 'center',
        justifyContent: 'center'
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