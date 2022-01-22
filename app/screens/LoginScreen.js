import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  View,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import * as Yup from "yup";
import { Block, Checkbox, Text, theme } from "galio-framework";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";

import { images, COLORS, FONTS, SIZES } from "../config";

import AppText from "../components/Text";
const { width, height } = Dimensions.get("screen");

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [error, setError] = useState();

  return (
    <Screen>
      <StatusBar hidden />
      <ImageBackground
        source={images.bg}
        style={{ width, height, zIndex: 1, opacity: 0.9 }}
      >
        <Block flex middle>
          <AppText style={styles.text}>something</AppText>
          <Block style={styles.registerContainer}>
            <Block flex>
              <Block flex={0.17} middle>
                <Text color="#8898AA" size={12}>
                  Login
                </Text>
              </Block>
              <Block flex center>
                <Form
                  initialValues={{ name: "", email: "", password: "" }}
                  validationSchema={validationSchema}
                >
                  <ErrorMessage error={error} visible={error} />
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <FormField
                        style={{ borderBottomWidth: 0.2, width: "95%" }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <FormField
                        style={{ borderBottomWidth: 0.2, width: "95%" }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                      />
                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3,
                        }}
                        color={COLORS.primary}
                        label="I agree with the"
                      />
                      <View
                        style={{ width: 100, marginVertical: 10 }}
                        color="transparent"
                        textStyle={{
                          color: COLORS.primary,
                        }}
                      ></View>
                    </Block>
                    <Block middle>
                      <View
                        color="primary"
                        style={
                          (styles.createButton,
                          { width: "100%", marginVertical: 30 })
                        }
                      >
                        <SubmitButton title="login" />
                      </View>
                    </Block>
                  </KeyboardAvoidingView>
                </Form>
              </Block>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.67,
    backgroundColor: COLORS.light,
    borderRadius: 25,
  },
  socialConnect: {
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA",
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: COLORS.primary,
    fontWeight: "800",
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
  },
  text: {
    alignItems: "center",
    textAlign: "center",
    width: "100%",
    height: 60,
  },
});

export default RegisterScreen;
