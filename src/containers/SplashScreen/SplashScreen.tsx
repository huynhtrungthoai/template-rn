import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { navigate } from "../../utils/navigation";

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      navigate("HomeScreen");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
