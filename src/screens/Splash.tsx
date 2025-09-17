import WaterAnimation from "@/assets/images/WaterAnimation.json";
import LottieView from "lottie-react-native";
import React,{useEffect} from 'react';
import { View,StyleSheet } from 'react-native';

const Splash = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    // Hide splash after animation duration
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // adjust based on animation length
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <LottieView
        source={WaterAnimation}        
        autoPlay
        loop={false}
        onAnimationFinish={onFinish} // alternative to timer
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "centwer",
    alignItems: "center",
    backgroundColor: "#fff", // match app background
  },
});

export default Splash;