import axios from 'axios'
export const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5004/clone-9d32b/us-central1/api",
  //deployed backend render
  baseURL: "https://amazon-api-deploy-o804.onrender.com",
});

