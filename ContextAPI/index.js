import React, { Component, Context, createContext } from "react";
import { ToastAndroid } from "react-native";
import axios from "axios";
import API from "./API";
import {
  AddStudent_path,
  DeleteStudent_path,
  Landing_path,
  LOGIN_URL,
  LOGOUT_URL,
  StudentDetail_path,
  SubjectList_path,
  USERINFO_URL,
  // AsyncStorage,
} from "./APIPATH";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GlobalSchoolInfo = createContext();

export class SchoolInfoProvider extends Component {
  state = {
    GlobalCollegeName: "Utkal University",
    login_username: "",
    login_password: "",
    UserDetail: [],
    signInError: false,
    LandingImage: [],
    mode: false,
    StudentListData: [],
    SubjectListData: [],
    loading: true,
    bottomModal: null,
    signInToken: null,
  };
  async componentDidMount() {
    const signToken = await AsyncStorage.getItem("signToken");
    console.log(signToken, "check token value");
    if (signToken !== null) {
      this.setState({
        signInToken: signToken,
      });
      this.GetUserInfo();
      this.bottomModalFunc(null);
    }
  }

  loading_true = (value) => {
    this.setState({
      loading: true,
    });
  };
  loading_false = (value) => {
    this.setState({
      loading: false,
    });
  };

  ModeHandler = async () => {
    const { mode } = this.state;

    this.setState({
      mode: !mode,
    });
    console.log(mode, "mode UI color");
  };

  bottomModalFunc = (value) => {
    this.setState({
      bottomModal: value,
      signInError: false,
    });
  };

  LandingPage = () => {
    API.get(Landing_path)
      .then((response) => {
        if (response && response.data) {
          this.setState({
            LandingImage: response.data,
          });
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        // setIsLoaded(true);
      });
  };

  StudentList = () => {
    API.get(StudentDetail_path)
      .then((response) => {
        if (response && response.data) {
          this.setState({
            StudentListData: response.data.student_detail,
          });
          this.loading_false();
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {});
  };

  GetSubjectList = () => {
    API.get(SubjectList_path)
      .then((response) => {
        if (response && response.data) {
          this.setState({
            SubjectListData: response.data,
          });
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {});
  };

  studentAdd = (data) => {
    console.log(data, "asdfasdf asdfa sdf as");
    this.loading_false();
    API
      // .post("http://127.0.0.1:8000/api/student_detail/", data)
      // .post("https://djangoreact.pythonanywhere.com/api/student_detail/", data)
      .post(AddStudent_path, data)

      .then((response) => {
        if (response && response.data) {
          // history.push("/subject-list");
          this.loading_false();
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {});
  };

  studentDelete = (id) => {
    const STUDENT_DELETE_URL = DeleteStudent_path;
    API.delete(`${STUDENT_DELETE_URL}${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {});
  };

  handleSignIn = async () => {
    const { login_username, login_password } = this.state;
    let data = {
      username: login_username,
      password: login_password,
    };
    await axios
      .post(LOGIN_URL, data)

      .then((res) => {
        this.setState({
          signInToken: res.data.token,
        });
        ToastAndroid.show("Successfully Login", ToastAndroid.SHORT);
      })
      .catch((error) => {
        this.setState({
          signInError: true,
        });
        console.log(error.response.data, "error");
      });

    console.log("dddd", this.state.signInToken);
    const { signInToken } = this.state;

    if (signInToken !== null) {
      await AsyncStorage.setItem("signToken", signInToken)
        .then(() => {
          console.log("data saved");
          this.GetUserInfo();
          this.bottomModalFunc(null);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleLogout = () => {
    this.setState({
      login_username: "",
      login_password: "",
      signInToken: null,
    });
    ToastAndroid.show("Successfully Logout", ToastAndroid.SHORT);
  };

  GetUserInfo = () => {
    const token = { token: this.state.signInToken };
    API.post(USERINFO_URL, token, {
      headers: { Authorization: `token ${this.state.signInToken}` },
    })
      .then((response) => {
        if (response && response.data) {
          this.setState({
            UserDetail: response.data,
          });
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {});
  };

  handleInputBox = (text, stateProp) => {
    this.setState({
      [stateProp]: text,
    });
  };

  render() {
    return (
      <GlobalSchoolInfo.Provider
        value={{
          ...this.state,
          ModeHandler: this.ModeHandler,
          LandingPage: this.LandingPage,
          StudentList: this.StudentList,
          GetSubjectList: this.GetSubjectList,
          studentAdd: this.studentAdd,
          studentDelete: this.studentDelete,
          bottomModalFunc: this.bottomModalFunc,
          handleInputBox: this.handleInputBox,
          handleSignIn: this.handleSignIn,
          handleLogout: this.handleLogout,
          GetUserInfo: this.GetUserInfo,
        }}
      >
        {this.props.children}
      </GlobalSchoolInfo.Provider>
    );
  }
}
