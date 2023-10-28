//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Res from '../../Res';

// create a component
const Splash = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require(`../../../res/${Res.images.bg}`)} style={styles.image}>

            </ImageBackground>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: Res.dimensions.width,
        height: Res.dimensions.height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: "100%"
    }
});

//make this component available to the app
export default Splash;
