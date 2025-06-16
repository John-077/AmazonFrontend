import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-2658b/us-central1/api",
  
  // deployed version of amazon server on render.com
  baseURL: "https://amazonbackend-deploy.onrender.com/",
});

export { axiosInstance };
