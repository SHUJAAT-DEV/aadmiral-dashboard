import axios from "axios";

const setAuthToken = (token) => {
  console.log(token)
  if (token) {
    //Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
