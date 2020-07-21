import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    View,
    Text,
    StatusBar,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';

import { StationCard } from '../components/StationCard'

const SCREEN_WIDTH = Dimensions.get('window').width

const COLOR_PALLETE = {
    primary: '#6022CD',
    secondary: '#FFFFFF',
    default: '#6b6efe4f'
};

const DATA = [
    {
        title: "Recomendadas",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Escuchadas Recientemente",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Todas las estaciones",
        data: ["Water", "Coke", "Beer", "Water", "Coke", "Beer", "Water", "Coke", "Beer"]
    },
    {
        title: "Todas las estaciones",
        data: ["Water", "Coke", "Beer", "Water", "Coke", "Beer", "Water", "Coke", "Beer"]
    }
];

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ backgroundColor: COLOR_PALLETE.primary, flex: 1 }}>
                <ScrollView style={{ backgroundColor: COLOR_PALLETE.primary, flex: 1 }}>
                    <View style={{ height: 130 }}>
                        <View style={{ marginTop: 30, marginBottom: 10 }}>
                            <Text style={styles.greetingTitle}>Hola, Marcos</Text>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: COLOR_PALLETE.primary, fontFamily: 'Raleway-Bold', fontSize: 20 }}>Estaciones</Text>
                            <TouchableWithoutFeedback>
                                <Text style={{ color: COLOR_PALLETE.primary, fontFamily: 'Raleway-Light' }} onPress={() => navigation.navigate('StationsList')}>Ver todas</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View>
                            <Text style={styles.sectionTitle}>Mas escuchadas</Text>
                            {DATA.map(() => (
                                <StationCard navigation={navigation} />
                            )
                            )}
                        </View>
                        <View>
                            <Text style={styles.sectionTitle}>Escuchadas Recientemente</Text>
                            {DATA.map(() => (
                                <StationCard navigation={navigation} />
                            )
                            )}
                        </View>
                        <View>
                            <Text style={styles.sectionTitle}>Recomendados para tí</Text>
                            {DATA.map(() => (
                                <StationCard navigation={navigation} />
                            )
                            )}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};


const styles = StyleSheet.create({
    greetingTitle: {
        fontSize: 30,
        textTransform: 'uppercase',
        color: COLOR_PALLETE.secondary,
        fontFamily: 'Raleway-Bold',
        marginLeft: 10
    },
    listContainer: {
        backgroundColor: COLOR_PALLETE.secondary,
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
        marginVertical: 20,
    }
});

export { HomeScreen }