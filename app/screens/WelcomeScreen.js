import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Button from "../components/Button";
import AppText from "../components/Text";
import { images, COLORS, FONTS, SIZES } from "../config";

const WelcomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={images.bg}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ alignItems: "center", marginHorizontal: SIZES.padding }}>
          <AppText style={{ ...FONTS.h2 }}>Lorem Ipsum</AppText>
          <AppText style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </AppText>
        </View>
        <View style={styles.button}>
          <Button title="start!" color="secondary" onPress={() => {}} />
        </View>
      </View>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  button: {
    width: "90%",
    marginTop: SIZES.padding,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  text: {
    color: COLORS.secondary,
    marginTop: SIZES.padding,
    textAlign: "center",
    ...FONTS.body3,
  },
});
