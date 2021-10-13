import React from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView, SafeAreaView } from 'react-native';

//dimension api kullanımı
const dimensions = Dimensions.get('screen');
const width = dimensions.width;
const height = dimensions.height;

//margin - padding farkı
//responsive olsun diye ekran width'i kullanma

const HomeScreen = () => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
            <View style={styles.header}>
                <Text>ANASAYFA</Text>
            </View>
            <ScrollView style={styles.campaignsContainer}
            contentContainerStyle = {{flexGrow:1,}}>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                
            </ScrollView>
            <View style={styles.prooduct}/>
            <View style={styles.footer}/>
        </View>

        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'red',
    },
    container:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderColor: 'black',
        //borderWidth: 2,
        flex: 1,
        paddingHorizontal: 20,

    },
    header: {
        backgroundColor: 'pink',
        height: width * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,

    },
    campaignsContainer:{
        backgroundColor: 'white',
        height: width * 0.5,
        borderColor: 'rgba(0,0,0,0.7)',
        borderWidth: 1,
        borderRadius: 10,
        padding: width *0.05,
        flexShrink:0,
    },
    prooduct: {
        backgroundColor: 'orange',
        height: width*0.5,
        marginHorizontal: 20,
        marginTop: 20,
    },
    footer: {
        backgroundColor: 'lightgreen',
        height: width * 0.3,
        marginTop: 20,
    },
});

export default HomeScreen;