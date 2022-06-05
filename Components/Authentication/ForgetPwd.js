import React, { useContext } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalSchoolInfo } from "../../ContextAPI";

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
  buttonsSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button1: {
    width: 156,
    height: 50,
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#499142",
  },
  buttonText1: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 15,
    paddingVertical: 14,
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
  mobileNoText: {
    fontSize: 11,
    fontWeight: "300",
    color: "#7a7d88",
  },
  mobileNoDisplaySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  mobileNoValue: {
    fontWeight: "500",
    color: "#494d5a",
  },
  editText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#af0007",
  },
  link: {
    color: "blue",
  },
});

const ForgotPwd = () => {
  const {
    bottomModalFunc,
    // handleInputBox,
    // handleSignIn,
    // signInError,
    // signInToken,
    // handleResetPwd,
  } = useContext(GlobalSchoolInfo);

  //   const handleModel = async () => {
  //     const signToken = await AsyncStorage.getItem("signToken");
  //     console.log("signToken", signToken);
  //   };

  //   handleModel();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "700" }}>Forgot Password </Text>
        <TouchableOpacity onPress={() => bottomModalFunc(null)}>
          <Ionicons name="ios-close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.signUpSection}>
        <TextInput
          placeholder="Enter Email-Id / Username"
          style={styles.textInput1}
          keyboardType="email-address"
          //   onChangeText={(text) => handleInputBox(text, "forgot_pwd_email")}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          //   handleResetPwd();
          bottomModalFunc("signIn");
        }}
        style={{ backgroundColor: "#499142", marginTop: 12 }}
      >
        <Text style={styles.buttonText}>Reset Password </Text>
      </TouchableOpacity>
      <View style={{ alignItems: "flex-end", marginTop: 15 }}>
        <TouchableOpacity onPress={() => bottomModalFunc("signIn")}>
          <Text style={styles.link}>Existing User? LOGIN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.termsConditions}>
        By signing in you agree to our{" "}
        <Text style={styles.termsConditionsSub}>terms & conditions</Text>
      </Text>
    </View>
  );
};

export default ForgotPwd;
