// export const APP_URL = process.env.REACT_APP_URL;

const APP_URL = "https://djangoreact.pythonanywhere.com/";
// const APP_URL = "https://ba95-122-172-10-127.in.ngrok.io/";
console.log(APP_URL, "asdfasf");

export const LOGIN_URL = APP_URL + "api/login-user/";
export const LOGOUT_URL = APP_URL + "api/logout-user/";
export const USERINFO_URL = APP_URL + "api/get-user/";

export const Landing_path = APP_URL + "api/landing-img-api/";
export const StudentDetail_path = APP_URL + "api/student_detail/";
export const SubjectList_path = APP_URL + "api/subject-api/";
export const AddStudent_path = APP_URL + "api/student_detail/";
export const DeleteStudent_path = APP_URL + "api/student_update/";
