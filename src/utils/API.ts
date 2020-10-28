import axios from "axios";

// Get the object off employee data

const API = {
  getEmployeeData: () => {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};

export default API;