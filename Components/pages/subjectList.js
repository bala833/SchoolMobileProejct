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

const SubjectLIstPage = ({ navigation }) => {
  const { GetSubjectList, SubjectListData } = useContext(GlobalSchoolInfo);

  useEffect(() => {
    GetSubjectList();
  }, []);

  console.log(SubjectListData.length, "length of array");

  const StudentRender = ({ item }) => (
    <View style={styles.TableWrapper}>
      {/* <Text style={styles.IdWarpper}>{item.id}</Text> */}
      <Text style={styles.IdWarpper}>{item.publish_date}</Text>
      <Text style={styles.IdWarpper}>{item.subject}</Text>

      <Text style={styles.IdWarpper}>
        <TouchableOpacity>
          <Feather name="edit" size={15} color="green" />
        </TouchableOpacity>
      </Text>
      <Text style={styles.IdWarpper}>
        <TouchableOpacity>
          <MaterialIcons name="delete-outline" size={20} color="red" />
        </TouchableOpacity>
      </Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.TableHeaderWrapper}>
      {/* <Text style={styles.IdWarpper}>Id</Text> */}
      <Text style={styles.IdWarpper}>Date</Text>
      <Text style={styles.IdWarpper}>Subject</Text>
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
          <Text style={{ color: "#FFF", marginTop: 2, marginLeft: 10 }}>
            {" "}
            Subject List{" "}
          </Text>
        </View>
        <View></View>
      </View>

      <View style={styles.SubContainerWrapper}>
        <SafeAreaView>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={SubjectListData}
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
export default SubjectLIstPage;
