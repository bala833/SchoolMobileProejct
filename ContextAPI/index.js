import React, { Component, Context, createContext } from "react";
import axios from "axios";

export const GlobalSchoolInfo = createContext();
export class SchoolInfoProvider extends Component {
  state = {
    GlobalCollegeName: "Utkal University",
    LandingImage: [],
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

  render() {
    return (
      <GlobalSchoolInfo.Provider
        value={{
          ...this.state,
          LandingPage: this.LandingPage,
        }}
      >
        {this.props.children}
      </GlobalSchoolInfo.Provider>
    );
  }
}
