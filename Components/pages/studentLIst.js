import React, { useEffect, useContext } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { GlobalSchoolInfo } from "../../ContextAPI";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

const StudentLIstPage = ({ navigation }) => {
  const { StudentList, StudentListData, studentDelete } =
    useContext(GlobalSchoolInfo);

  useEffect(() => {
    StudentList();
  }, []);

  const DeleteHandler = (id) => {
    studentDelete(id);
  };

  // console.log(StudentListData.length, "length of array");

  const StudentRender = ({ item }) => (
    <View style={styles.TableWrapper} key={item.id}>
      {/* <Text style={styles.IdWarpper}>{item.id}</Text> */}
      <Text style={styles.IdWarpper}>{item.first_name}</Text>
      <Text style={styles.IdWarpper}>{item.last_name}</Text>
      <Text style={styles.IdWarpper}>{item.surname}</Text>
      <Text style={styles.IdWarpper}>{item.std}</Text>
      <Text style={styles.IdWarpper}>
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.navigate("SubjectForm", {
              id: item.id,
              first_name: item.first_name,
              last_name: item.last_name,
              surname: item.surname,
              standard: item.std,
              isedit: true,
            })
          }
        >
          <Feather name="edit" size={15} color="green" />
        </TouchableOpacity>
      </Text>
      <Text style={styles.IdWarpper}>
        <TouchableOpacity onPress={() => DeleteHandler(item.id)}>
          <MaterialIcons name="delete-outline" size={20} color="red" />
        </TouchableOpacity>
      </Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.TableHeaderWrapper}>
      {/* <Text style={styles.IdWarpper}>Id</Text> */}
      <Text style={styles.IdWarpper}>First Name</Text>
      <Text style={styles.IdWarpper}>Last Name</Text>
      <Text style={styles.IdWarpper}>Surname</Text>
      <Text style={styles.IdWarpper}>Standard</Text>
      <Text style={styles.IdWarpper}>Edit</Text>
      <Text style={styles.IdWarpper}>Delete</Text>
    </View>
  );
  const renderFooter = () => <View style={styles.FooterText}></View>;

  return (
    <View style={styles.ContainWrapper}>
      <View style={styles.GoBackHeaderWrapper}>
        <View style={styles.BackAndPageName}>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <View style={styles.Goback}>
              <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Text style={{ color: "#FFF", marginTop: 2, marginLeft: 5 }}>
            {" "}
            Student List{" "}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SubjectForm", { id: 0 })}
        >
          <View
            style={{
              marginTop: 5,
              width: 50,
              height: 25,
              borderRadius: 5,
              backgroundColor: "#65C18C",
            }}
          >
            <Text
              style={{
                justifyContent: "center",
                textAlign: "center",
                marginTop: 2,

                color: "black",
              }}
            >
              Add
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.SubContainerWrapper}>
        <SafeAreaView>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={StudentListData}
            renderItem={StudentRender}
            keyExtractor={(item) => item.id}
            onEndReachedThreshold={0.2}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
          />
          {/* <View style={{ flex: 1 }} /> */}
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ContainWrapper: {
    flex: 1,
  },
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
  SubContainerWrapper: {
    flex: 1,
    // marginTop: 5,
    marginBottom: 20,
  },
  TableWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomWidth: 2,
  },
  TableHeaderWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  IdWarpper: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 13,
  },
  FooterText: {
    marginBottom: 20,
  },
});
export default StudentLIstPage;
