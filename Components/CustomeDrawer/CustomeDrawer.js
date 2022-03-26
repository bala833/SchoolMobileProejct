import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const CustomeDrawer = (props) => {
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
          <Image
            source={require("../../assets/UserDrawerImage/bala.png")}
            style={{ height: 80, width: 80, borderRadius: 40 }}
          />
          <Text style={{ color: "#FFF", fontSize: 15 }}>Bala Prajapati</Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
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
        <TouchableOpacity style={{ paddingVertical: 15 }}>
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
      </View>
    </View>
  );
};

export default CustomeDrawer;
