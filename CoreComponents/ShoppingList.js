import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, SafeAreaView, CheckBox } from 'react-native';

const ShoppingList = props => {
    const [isSelected, setSelection] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>ALIŞVERİŞ LİSTESİ</Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}
                    placeholder="Yazmaya başlayın..."/>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} >EKLE</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Alınacaklar</Text>
                <View style={styles.line}>
                    <View style={styles.square}></View>
                    <View />
                    <Text style={{margin: 25,flexGrow:1,}}>Ekmek</Text>
                    <TouchableOpacity style={styles.btnSil}>
                        <Text >Sil</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}>
                    <View style={styles.square}></View>
                    <View />
                    <Text style={{margin: 25,flexGrow:1,}}>Süt</Text>
                    <TouchableOpacity style={styles.btnSil}>
                        <Text >Sil</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}>
                    <View style={styles.square}></View>
                    <View />
                    <Text style={{margin: 25,flexGrow:1,}}>Elma</Text>
                    <TouchableOpacity style={styles.btnSil}>
                        <Text >Sil</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Text style={styles.headerContainer}>ALIŞVERİŞ LİSTESİ</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Yazmaya başlayın..."
                placeholderTextColor="rgba(0,0,0,0.3)">
            </TextInput>
            <TouchableOpacity style={styles.button}>
                <Text>Buraya dokun</Text>
            </TouchableOpacity> */}

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#c4def6',

    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        //alignItems: 'center',
        //backgroundColor: 'green',
    },
    headerContainer: {
        alignItems: 'center',
        //marginTop:20,
        //justifyContent: 'center',
        fontSize: 40,
        color: '#dce775',
        //backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'gray',

    },
    headerText: {
        alignItems: 'center',
        justifyContent: 'center',
        //alignItems: 'stretch',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#db3e00',
        margin: 10,
    },
    textInput:{
        alignItems: 'center',
        justifyContent: 'center',
        //width:200,
        height: 40,
        backgroundColor: '#dce775',
        borderRadius: 5,
        marginTop:20,
        marginLeft: 20,
        marginRight: 20,

    },
    title: {
        fontSize: 15,
        color: '#db3e00',
        marginTop:20,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'rgb(200,200,200)',
        height: 40,
        borderRadius: 10,
        marginTop:20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
    },
    btnSil: {
        backgroundColor: 'rgb(200,200,200)',
        height: 40,
        width: 40,
        borderRadius: 10,
        marginTop:15,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'rtl',
    },
    buttonText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        color: '#db3e00',
        margin: 10,
        fontWeight: 'bold',
    },
    line: {
        flexDirection: 'row',
    },
    square: {
        backgroundColor: 'lightblue',
        width: 30,
        height: 30,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 5,
        marginTop:20,
        marginLeft: 20,
    },
})

export default ShoppingList;
