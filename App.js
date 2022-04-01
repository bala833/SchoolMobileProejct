import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./Components/pages/dashboard";
import StudentLIstPage from "./Components/pages/studentLIst";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomeDrawer from "./Components/CustomeDrawer/CustomeDrawer";

import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { SchoolInfoProvider } from "./ContextAPI";
import SubjectLIstPage from "./Components/pages/subjectList";
import Studentform from "./Components/pages/studentform";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomeDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "green",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Student"
        component={StudentLIstPage}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-child-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Subject"
        component={SubjectLIstPage}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons name="subject" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Address"
        component={StudentLIstPage}
        options={{
          drawerIcon: ({ color }) => (
            <Entypo name="address" size={20} color="black" />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="DepartmentTeacher"
        component={StudentLIstPage}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-child-outline"
              size={24}
              color={color}
            />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Teacher"
        component={StudentLIstPage}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="chalkboard-teacher" size={15} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Department"
        component={StudentLIstPage}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="office-building"
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <SchoolInfoProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="studentList" component={StudentLIstPage} />
          <Stack.Screen name="SubjectForm" component={Studentform} />
          <Stack.Screen name="SubjectList" component={SubjectLIstPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SchoolInfoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
