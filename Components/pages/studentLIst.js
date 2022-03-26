import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

const StudentLIst = ({ navigation }) => {
  return (
    <View>
      <Text>This is Stuent List page</Text>

      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      /> */}
    </View>
  );
};

export default StudentLIst;
