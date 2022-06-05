import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { GlobalSchoolInfo } from "../../ContextAPI";

// import { TextInput } from "react-native-paper";

const Studentform = ({ navigation, route }) => {
  const { studentAdd } = useContext(GlobalSchoolInfo);
  const { id, first_name, last_name, surname, standard, isedit } = route.params;

  //   not using getDetails logic
  function getDetails(type) {
    if (route.params) {
      // console.log(getholiday.title, 'get value by id')
      switch (type) {
        case "first_name":
          return first_name;
        case "last_name":
          return last_name;
        case "surname":
          return surname;
        case "standard":
          return standard;
      }
    }
    return "";
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [surName, setSurName] = useState("");
  const [std, setStd] = useState("");

  useEffect(() => {
    if (id > 0) {
      const standardString = standard.toString();
      setFirstName(first_name);
      setLastName(last_name);
      setSurName(surname);
      setStd(standardString);
    } else {
      setFirstName("");
      setLastName("");
      setSurName("");
      setStd(null);
    }
  }, [id]);

  console.log(firstName, lastName, surName, std, "the data is updating ");
  console.log(typeof std);
  const SubmitHandler = () => {
    let StudentData = {
      id: id,
      first_name: firstName,
      last_name: lastName,
      surname: surName,
      std: std,
    };

    console.log(StudentData, "submited student data");
    studentAdd(StudentData);
    navigation.navigate("studentList");
    if (isedit) {
    } else {
      setFirstName("");
      setLastName("");
      setSurName("");
      setStd("");
    }
  };
  return (
    <View style={{ flex: 1 }}>
      {/* Header Part */}
      <View style={styles.GoBackHeaderWrapper}>
        <View style={styles.BackAndPageName}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.Goback}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Text style={{ color: "#FFF", marginTop: 2, marginLeft: 5 }}>
            {/* {id > 0 ? "Update Student" : "Add Student"}{" "} */}
          </Text>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>

      <View>
        {/* <Text>{first_name + last_name + standard}</Text> */}
        {/* <Text>{getDetails("first_name")}</Text> */}

        {/* <Text>{std + firstName + lastName}</Text> */}

        <Text
          style={{
            justifyContent: "center",
            textAlign: "center",
            fontSize: 20,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          {id > 0 ? "Update Student" : "Add Student"}{" "}
        </Text>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <View>
          <Text style={{ marginLeft: 50 }}>First Name</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              placeholder="Enter First Name"
              value={firstName}
              style={{
                borderWidth: 1,
                borderColor: "black",
                width: 250,
                backgroundColor: "#C1F4C5",
                color: "black",
                borderRadius: 3,
                padding: 3,
              }}
              onChangeText={(text) => setFirstName(text)}
            />
          </View>
        </View>

        <View style={styles.InputLableWrapper}>
          <Text style={{ marginLeft: 50 }}>Last Name</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              placeholder="Enter Last Name"
              value={lastName}
              style={{
                borderWidth: 1,
                borderColor: "black",
                width: 250,
                backgroundColor: "#C1F4C5",
                color: "black",
                borderRadius: 3,
                padding: 3,
              }}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
        </View>
        <View style={styles.InputLableWrapper}>
          <Text style={{ marginLeft: 50 }}>Surname</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TextInput
              placeholder="Surname Name"
              value={surName}
              style={{
                borderWidth: 1,
                borderColor: "black",
                width: 250,
                backgroundColor: "#C1F4C5",
                color: "black",
                borderRadius: 3,
                padding: 3,
              }}
              onChangeText={(text) => setSurName(text)}
            />
          </View>
        </View>
        <View style={styles.InputLableWrapper}>
          <Text style={{ marginLeft: 50 }}>Standard</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {/* <Text>{std}</Text> */}
            <TextInput
              placeholder="Standard"
              value={std}
              style={{
                borderWidth: 1,
                borderColor: "black",
                width: 250,
                backgroundColor: "#C1F4C5",
                color: "black",
                borderRadius: 3,
                padding: 3,
              }}
              onChangeText={(text) => setStd(text)}
              keyboardType="number-pad"
            />
          </View>
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 50,
        }}
      >
        <TouchableOpacity onPress={() => SubmitHandler()}>
          <View
            style={{
              backgroundColor: "#357C3C",
              width: 80,
              height: 25,
              borderRadius: 3,
            }}
          >
            <Text
              style={{
                color: "#FFF",
                justifyContent: "center",
                textAlign: "center",
                marginTop: 2,
              }}
            >
              Submit
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.push("studentList")}
        >
          <View
            style={{
              marginLeft: 30,
              backgroundColor: "#D8D2CB",
              width: 80,
              height: 25,
              borderRadius: 3,
            }}
          >
            <Text
              style={{
                color: "black",
                justifyContent: "center",
                textAlign: "center",
                marginTop: 2,
              }}
            >
              Cancel
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  GoBackHeaderWrapper: {
    paddingTop: 50,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "green",
    flexDirection: "row",
  },
  Goback: {
    paddingBottom: 10,
  },
  BackAndPageName: {
    flexDirection: "row",
  },
  InputLableWrapper: {
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default Studentform;
