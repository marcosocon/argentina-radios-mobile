import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { StationCard } from '../components/StationCard';


const COLOR_PALLETE = {
    primary: '#6022CD',
    secondary: '#FFFFFF',
    default: '#6b6efe4f'
};

const StationsScreen = ({ navigation } : any) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text> O </Text>
                </TouchableOpacity>
                <View style={styles.mainPanel}>
                    <StationCard navigation />
                    <StationCard navigation />
                    <StationCard navigation />
                    <StationCard navigation />
                    <StationCard navigation />
                    <StationCard navigation />

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
        height: '100%',
        marginTop: 60,
        marginHorizontal: 10,
        borderRadius: 25,
    }
});

export { StationsScreen }