import React, { useContext } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Fontisto, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalSchoolInfo } from "../../ContextAPI";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomeDrawer = (props) => {
  const navigation = useNavigation();
  const {
    mode,
    ModeHandler,
    signInToken,
    handleLogout,
    bottomModalFunc,
    UserDetail,
  } = useContext(GlobalSchoolInfo);

  const logout = async () => {
    // clearData();
    // navigation.navigate('HOME');
    // await AsyncStorage.removeItem('postcode');
    // navigation.closeDrawer();
    navigation.dispatch(DrawerActions.closeDrawer());
    await AsyncStorage.removeItem("signToken");
    handleLogout();
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "green" }}
      >
        <ImageBackground
          source={require("../../assets/UserDrawerImage/BackgroundFade.jpg")}
          style={{ padding: 5, paddingLeft: 15 }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                source={{
                  uri:
                    signInToken != null
                      ? UserDetail.picture
                      : "https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_4815126.jpg",
                }}
                // source={require("../../assets/UserDrawerImage/bala.png")}
                style={{ height: 80, width: 80, borderRadius: 40 }}
              />
              {signInToken != null && (
                <Text
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    alignSelf: "center",

                    color: "#FFF",
                    fontSize: 15,
                  }}
                >
                  {UserDetail.username} &nbsp;
                  {UserDetail.last_name}
                </Text>
              )}
            </View>
            <View style={{ marginTop: 10, left: 130 }}>
              <TouchableOpacity onPress={() => ModeHandler()}>
                <Text>
                  {mode ? (
                    <Fontisto name="day-sunny" size={22} color="yellow" />
                  ) : (
                    <MaterialCommunityIcons
                      name="weather-night"
                      size={24}
                      color="#fff"
                    />
                  )}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: mode ? "gray" : "#fff",
            paddingTop: 10,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity style={{ paddingVertical: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="share-social-outline" size={20} />
            <Text style={{ fontSize: 15, marginLeft: 5, color: "#333" }}>
              Refer Friends
            </Text>
          </View>
        </TouchableOpacity>
        {signInToken === null && (
          <TouchableOpacity
            style={{ paddingVertical: 15 }}
            onPress={() => {
              bottomModalFunc("forgotpwd");
              navigation.dispatch(DrawerActions.closeDrawer());
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="exit-outline" size={20} />
              <Text style={{ fontSize: 15, marginLeft: 5, color: "#333" }}>
                Forget Password
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {signInToken != null && (
          <TouchableOpacity
            style={{ paddingVertical: 15 }}
            onPress={() => {
              bottomModalFunc("resetpwd");
              navigation.dispatch(DrawerActions.closeDrawer());
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="exit-outline" size={20} />
              <Text style={{ fontSize: 15, marginLeft: 5, color: "#333" }}>
                Reset Password
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {signInToken != null && (
          <TouchableOpacity
            style={{ paddingVertical: 15 }}
            onPress={() => logout()}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="exit-outline" size={20} />
              <Text style={{ fontSize: 15, marginLeft: 5, color: "#333" }}>
                Signout
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomeDrawer;
