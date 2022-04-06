import React, { useContext, useEffect } from "react";
import { View, Text, Pressable, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { GlobalSchoolInfo } from "../../ContextAPI";
// import { DrawerActions } from "react-navigation";
import { DrawerActions } from "@react-navigation/native";

const Dashboard = ({ navigation }) => {
  const { GlobalCollegeName, LandingPage, LandingImage } =
    useContext(GlobalSchoolInfo);

  useEffect(() => {
    //   Loading Landing image
    LandingPage();
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1, paddingTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            // onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            onPress={() => navigation.openDrawer()}
          >
            <View>
              <Feather name="menu" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {GlobalCollegeName}
            </Text>
          </View>
        </View>
        <View></View>
      </View>

      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        {LandingImage.map((item) => {
          return (
            // <View>
            //   <Text>{item.img}</Text>
            // </View>
            <Image
              key={item.id}
              style={{ height: 350, width: 350 }}
              source={{ uri: item.img }}
            />
          );
        })}
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: "column",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              alignItems: "center",
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Establish on online presence
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 20 }}>React Native with Django</Text>
        </View>

        {/* button */}
        <View
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "green",
                  width: 110,
                  height: 30,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    justifyContent: "center",
                    color: "#fff",
                    marginTop: 3,
                    alignSelf: "center",
                  }}
                >
                  Explore Layout
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  borderColor: "green",
                  borderWidth: 1,
                  width: 100,
                  height: 30,
                  borderRadius: 5,
                  marginLeft: 20,
                }}
              >
                <Text
                  style={{
                    justifyContent: "center",
                    marginTop: 3,
                    alignSelf: "center",
                  }}
                >
                  Purchace
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
