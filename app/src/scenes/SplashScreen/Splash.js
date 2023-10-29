//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Res from "../../Res";
import { useEffect } from "react";
import { GlobalStyles } from "../../GlobalStyles";

// create a component
const Splash = () => {
  useEffect(() => {
    Res.Fonts;
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`../../../res/${Res.images.bg}`)}
        style={styles.image}
      >
        <View>
          <View style={styles.banner}>
            <Text style={GlobalStyles.font}>Logo</Text>
            <Text>100K+ Premium Recipe </Text>
          </View>
          <View>
            <Text>Get</Text>
            <Text>Cooking</Text>
            <Text>Simple way to find Tasty Recipe</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: Res.dimensions.width,
    height: Res.dimensions.height,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  banner: {},
});

//make this component available to the app
export default Splash;
