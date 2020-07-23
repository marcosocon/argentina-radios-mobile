import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    TextInput,
} from 'react-native';

import { StationCard } from '../components/StationCard';
import { HeaderWithBack } from './../components/HeaderWithBack';
import { SearchBar } from './../components/SearchBar';

const COLOR_PALLETE = {
    primary: '#6022CD',
    secondary: '#FFFFFF',
    default: '#6b6efe4f'
};


const DATA = [
    {
        id: 1,
        title: 'Text 1'
    },
    {
        id: 2,
        title: 'Text 2'
    },
    {
        id: 3,
        title: 'Text 3'
    },
    {
        id: 1,
        title: 'Text 1'
    },
    {
        id: 2,
        title: 'Text 2'
    },
    {
        id: 3,
        title: 'Text 3'
    },
    {
        id: 1,
        title: 'Text 1'
    },
    {
        id: 2,
        title: 'Text 2'
    },
    {
        id: 3,
        title: 'Text 3'
    },
    {
        id: 1,
        title: 'Text 1'
    },
    {
        id: 2,
        title: 'Text 2'
    },
    {
        id: 3,
        title: 'Text 3'
    },
];


const renderItem = ({item}) => {
    return (<StationCard navigation={{}} />)
}

const StationsScreen = ({ navigation } : any) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <HeaderWithBack navigation={navigation} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Todas las estaciones</Text>
                </View>
                <SearchBar />
                <View style={styles.mainPanel}>
                    <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id}/>

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
    titleContainer: {
        marginHorizontal: 10,
    },
    title: {
        fontFamily: 'Raleway-Bold',
        fontSize: 24,
        color: 'white'
    },
    mainPanel: {
        backgroundColor: COLOR_PALLETE.secondary,
        height: '100%',
        marginTop: 20,
        paddingTop: 20,
        paddingHorizontal: 10,
        borderRadius: 25,
    }
});

export { StationsScreen }