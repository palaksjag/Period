import Background from "@/assets/images/Background.png";
import '@expo/metro-runtime';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Splash from '../../src/screens/Splash';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash after ~3s (match your Lottie animation length)
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.image} resizeMode="cover">
        <Text style={styles.heading}>Period.</Text>
        <Text style={styles.description}>
          This period tracking platform aims at helping women dealing with PCOS and hormonal challenges.
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }, 
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    // ❌ alignItems: 'cover' is invalid
    alignItems: 'center', // or 'flex-start', 'flex-end'
  },
  heading: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold', 
    fontFamily: "Baskerville",
    textAlign: 'center',
  },
  description: {
    color: 'white',
    paddingTop: 30,
    textAlign: 'center',
    fontFamily: 'Optima'
  }
});
