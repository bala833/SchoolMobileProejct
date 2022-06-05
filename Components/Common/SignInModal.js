import React, { useContext } from "react";
import { View, Text } from "react-native";
import ForgotPwd from "../Authentication/ForgetPwd";
import ResetPwd from "../Authentication/ResetPwd";
import SignInOrSignUp from "../Authentication/SignInOrSIgnup";
import SignUp from "../Authentication/SignUp";
import CustomModal from "./CustomModal";

const SignInM = () => {
  return (
    <>
      <CustomModal
        cPadding={40}
        modalNumber={"signIn"}
        justifyCt="flex-end"
        btmTopLeftRad={30}
        btmTopRightRad={30}
      >
        <SignInOrSignUp />
      </CustomModal>
      <CustomModal
        cPadding={40}
        modalNumber={"signUp"}
        justifyCt="flex-end"
        btmTopLeftRad={30}
        btmTopRightRad={30}
      >
        <SignUp />
      </CustomModal>
      <CustomModal
        cPadding={40}
        modalNumber={"forgotpwd"}
        justifyCt="flex-end"
        btmTopLeftRad={30}
        btmTopRightRad={30}
      >
        <ForgotPwd />
      </CustomModal>
      <CustomModal
        cPadding={40}
        modalNumber={"resetpwd"}
        justifyCt="flex-end"
        btmTopLeftRad={30}
        btmTopRightRad={30}
      >
        <ResetPwd />
      </CustomModal>
    </>
  );
};

export default SignInM;
