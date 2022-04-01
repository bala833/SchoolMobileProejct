import React, { Component, Context, createContext } from "react";
import axios from "axios";

export const GlobalSchoolInfo = createContext();
export class SchoolInfoProvider extends Component {
  state = {
    GlobalCollegeName: "Utkal University",
    LandingImage: [],
    mode: false,
    StudentListData: [],
    SubjectListData: [],
  };

  ModeHandler = async () => {
    const { mode } = this.state;

    this.setState({
      mode: !mode,
    });
    console.log(mode, "mode UI color");
  };

  LandingPage = () => {
    axios
      .get("https://djangoreact.pythonanywhere.com/api/landing-img-api")
      .then((response) => {
        if (response && response.data) {
          console.log(response.data, "in action check data is load or not");
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
    axios
      .get("https://djangoreact.pythonanywhere.com/api/student_detail/")
      .then((response) => {
        if (response && response.data) {
          this.setState({
            StudentListData: response.data.student_detail,
          });
          // console.log(response.data, "in action check data is load or not");
        }
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {});
  };

  GetSubjectList = () => {
    axios
      .get("https://djangoreact.pythonanywhere.com/api/subject-api/")
      .then((response) => {
        if (response && response.data) {
          console.log(response.data, "subject list api data ");
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
    axios
      // .post("http://127.0.0.1:8000/api/student_detail/", data)
      .post("https://djangoreact.pythonanywhere.com/api/student_detail/", data)

      .then((response) => {
        console.log(response, "subject add api data ");
        if (response && response.data) {
          console.log(response.data, "subject add api data ");
          // history.push("/subject-list");
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {});
  };

  studentDelete = (id) => {
    const STUDENT_DELETE_URL =
      "https://djangoreact.pythonanywhere.com/api/student_detail/";
    axios
      .delete(`${STUDENT_DELETE_URL}${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {});
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
        }}
      >
        {this.props.children}
      </GlobalSchoolInfo.Provider>
    );
  }
}
