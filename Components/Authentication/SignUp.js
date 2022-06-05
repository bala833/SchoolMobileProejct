import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicator,
} from "react-native";
import { GlobalSchoolInfo } from "../../ContextAPI";
import { Ionicons } from "@expo/vector-icons";

const SignUp = () => {
  const {
    bottomModalFunc,
    // handleInputBox,
    // handleSignUp,
    // signInError,
    // signInToken,
    // signUpError,
    // validateMobileNumber,
  } = useContext(GlobalSchoolInfo);

  // const handleModel = async () => {
  //     const signToken = await AsyncStorage.getItem('signToken')
  //     console.log("signToken", signToken)
  // }

  const [buttonPressed, setButtonPressed] = useState(false);

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
        <Text style={{ fontWeight: "700" }}>Sign Up </Text>
        <TouchableOpacity onPress={() => bottomModalFunc(null)}>
          <Ionicons name="ios-close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.signUpSection}>
        <TextInput
          placeholder="Enter Mobile Number"
          style={styles.textInput1}
          keyboardType="phone-pad"
          maxLength={10}
          // onChangeText={(text) => handleInputBox(text, "userMobileNumber")}
        />
        {/* {signUpError.mobile &&
                    <Text style={{ color: "red" }}>Enter a valid mobile number</Text>
                } */}
      </View>
      <TouchableOpacity
        //  onPress={() => { setButtonPressed(); validateMobileNumber(); }}
        style={{ backgroundColor: "#499142", marginTop: 12, height: 48 }}
      >
        {buttonPressed ? (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={{ paddingTop: 7 }}
          />
        ) : (
          <Text style={styles.buttonText}> Continue </Text>
        )}
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

export default SignUp;

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

/* <TextInput
    placeholder='Enter Password'
    style={styles.otpTextInput}
    secureTextEntry
    onChangeText={(text) => handleInputBox(text, "signup_password")}
/>
<TextInput
    placeholder='Enter Your Postcode'
    style={{marginTop: 15,height: 50,padding: 10,backgroundColor: '#dfdfdf',color: '#494d5a'}}
    onChangeText={(text) => handleInputBox(text, "signup_zipcode")}
/>  */
