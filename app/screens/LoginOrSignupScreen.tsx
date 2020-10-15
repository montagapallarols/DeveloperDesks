import React, { useState } from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSetAppState } from "../lib/appstate";
import { useQuery } from "react-query";
import { signup, login } from "../lib/api";

import { theme, Button } from "app/ui";
import { useNavigation } from "@react-navigation/native";

export function LoginOrSignupScreen() {
  const insets = useSafeAreaInsets();
  const setState = useSetAppState();
  const navigation = useNavigation();
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const [signupState, setSignupState] = useState({
    email: "",
    password: "",
    name: "",
  });

  const changeLogin = (field: string, value: string) => {
    setLoginState({ ...loginState, [field]: value });
  };

  const changeSignUp = (field: string, value: string) => {
    setSignupState({ ...signupState, [field]: value });
  };

  const onSignupPress = async () => {
    const { name, email, password } = signupState;
    const data = await signup(name, email, password);
    setState({
      auth: { email: data.email, name: data.name, token: data.token },
    });
    navigation.navigate("Home");
  };

  const onLoginPress = async () => {
    const { email, password } = loginState;
    const data = await login(email, password);
    setState({
      auth: { email: data.email, name: data.name, token: data.token },
    });
    navigation.navigate("Home");
  };

  return (
    <ScrollView style={[styles.screen, { paddingTop: insets.top + 16 }]}>
      <Text style={styles.headerText}>Login</Text>
      <TextInput
        style={styles.formField}
        onChangeText={text => changeLogin("email", text)}
        placeholder='Email'
        autoCapitalize={"none"}
        value={loginState.email}
      />
      <TextInput
        style={styles.formField}
        onChangeText={text => changeLogin("password", text)}
        placeholder='Password'
        secureTextEntry
        autoCapitalize={"none"}
        value={loginState.password}
      />
      <Button style={styles.button} text={"Login"} onPress={onLoginPress} />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.separatorText}>----- or ------</Text>
      </View>
      <Text style={styles.headerText}>Sign up</Text>
      <TextInput
        style={styles.formField}
        placeholder="Developer's Name"
        onChangeText={t => changeSignUp("name", t)}
        value={signupState.name}
      />
      <TextInput
        style={styles.formField}
        placeholder='Email'
        autoCapitalize={"none"}
        onChangeText={t => changeSignUp("email", t)}
        value={signupState.email}
      />
      <TextInput
        style={styles.formField}
        placeholder='Password'
        autoCapitalize={"none"}
        secureTextEntry
        onChangeText={t => changeSignUp("password", t)}
        value={signupState.password}
      />
      <Button style={styles.button} onPress={onSignupPress} text={"Sign up"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 16,
  },
  headerText: {
    fontFamily: "RobotoSlab_800ExtraBold",
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 1.35 * 32,
    marginBottom: 16,
  },
  formField: {
    height: 40,
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1,
    marginVertical: 10,
    paddingLeft: 10,
  },
  separatorText: {
    fontFamily: "RobotoSlab_800ExtraBold",
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 1.35 * 32,
    marginBottom: 30,
    marginTop: 40,
  },
  button: {
    marginTop: 10,
  },
});
