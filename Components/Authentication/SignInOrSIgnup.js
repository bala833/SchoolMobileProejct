import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  ToastAndroid,
} from "react-native";
import { GlobalSchoolInfo } from "../../ContextAPI";
import { Ionicons } from "@expo/vector-icons";

const SignInOrSignUp = () => {
  const {
    bottomModalFunc,
    handleInputBox,
    handleSignIn,
    signInError,
    GetUserInfo,
    // signInToken,
  } = useContext(GlobalSchoolInfo);

  const handleModel = async () => {
    // await AsyncStorage.removeItem("signToken");

    handleSignIn();
    // GetUserInfo();
    const signToken = await AsyncStorage.getItem("signToken");
    console.log(signToken, "check sign token get or not");
    if (signToken !== null) {
      bottomModalFunc(null);
    }
  };
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "700" }}>Log In </Text>
        <TouchableOpacity onPress={() => bottomModalFunc(null)}>
          {/* <Icon name="close" type="AntDesign" style={{ color: "red" }} /> */}
          <Ionicons name="ios-close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.signUpSection}>
        <TextInput
          placeholder="Enter Email-Id / Username"
          style={styles.textInput1}
          keyboardType="email-address"
          onChangeText={(text) => handleInputBox(text, "login_username")}
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.otpTextInput}
          secureTextEntry
          onChangeText={(text) => handleInputBox(text, "login_password")}
        />
        {signInError && (
          <Text style={{ color: "red" }}>
            Unable to log in with provided credentials
          </Text>
        )}
      </View>
      <View style={{ alignItems: "flex-end", marginTop: 15 }}>
        <TouchableOpacity
          style={styles.bottomLinks}
          onPress={() => bottomModalFunc("forgotpwd")}
        >
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => handleModel()}
        style={{ backgroundColor: "#499142", marginTop: 12 }}
      >
        <Text style={styles.buttonText}>Log In </Text>
      </TouchableOpacity>
      <View style={{ alignItems: "flex-end", marginTop: 15 }}>
        <TouchableOpacity onPress={() => bottomModalFunc("signUp")}>
          <Text style={styles.link}>New Here? REGISTER</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.termsConditions}>
        By signing in you agree to our{" "}
        <Text style={styles.termsConditionsSub}>terms & conditions</Text>
      </Text>
    </View>
  );
};

export default SignInOrSignUp;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 30,
    height: 50,
    padding: 10,
    backgroundColor: "#dfdfdf",
    color: "#494d5a",
  },
  textInput1: {
    height: 50,
    padding: 10,
    backgroundColor: "#dfdfdf",
    color: "#494d5a",
  },
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    borderRadius: 4,
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 17,
    paddingVertical: 12,
  },

  otpTextInput: {
    marginTop: 15,
    height: 50,
    padding: 10,
    backgroundColor: "#dfdfdf",
    color: "#494d5a",
  },
  termsConditions: {
    marginTop: 30,
    fontSize: 12,
    textAlign: "center",
  },
  termsConditionsSub: {
    color: "#499142",
    fontWeight: "700",
  },
  signUpSection: {
    marginTop: 20,
  },
  link: {
    color: "blue",
  },
});
