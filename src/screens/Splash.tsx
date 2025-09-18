import WaterAnimation from "@/assets/images/WaterAnimation.json";
import LottieView from "lottie-react-native";
import React,{useEffect, useState} from 'react';
import { View,StyleSheet } from 'react-native';

const Splash = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
  const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null; 

  return (
    <View style={styles.container}>
      <LottieView
        source={WaterAnimation}        
        autoPlay
        loop={false} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // match app background
  },
});

export default Splash;