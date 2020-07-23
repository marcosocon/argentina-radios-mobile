import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { HeaderWithBack } from './../components/HeaderWithBack';


const COLOR_PALLETE = {
    primary: '#6022CD',
    secondary: '#FFFFFF',
    default: '#6b6efe4f'
};

const PLAYER_ICON_SIZE = 35;

const PlayerScreen = ({ navigation } : any) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <HeaderWithBack navigation={navigation} />
                <View style={styles.mainPanel}>
                    <View style={styles.artworkContainer}>
                        <Image
                            style={styles.artwork}
                            source={{
                            uri: 'https://i1.sndcdn.com/avatars-000445864257-cuwg3m-t500x500.jpg',
                            }}
                        />
                    </View>
                    <View style={styles.trackTitleContainer}>
                        <Text style={styles.trackTitle}>EP 24: How to build a business</Text>
                    </View>
                </View>
                <View style={styles.controlsContainer}>
                    <TouchableOpacity onPress={() => TrackPlayer.play()}>
                        <FeatherIcon name="play" size={PLAYER_ICON_SIZE}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => TrackPlayer.pause()}>
                        <FeatherIcon name="stop-circle" size={PLAYER_ICON_SIZE}/>
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
    artworkContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 25
    },
    artwork: {
        height: 275,
        width: 275,
        borderRadius: 25,
    },
    trackTitleContainer: {
        textAlign: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    trackTitle: {
        fontSize: 24,
        fontFamily: 'Raleway-Bold',
    },
    controlsContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        height: 70,
        borderRadius: 25,
        marginHorizontal: 50,
        marginTop: 40,
        alignItems: 'center'
    }
});

export { PlayerScreen }