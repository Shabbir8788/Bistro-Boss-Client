import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://bistro-boss-server-xi-fawn.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  // request interceptor to add authorization header for every secure call to the API
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("request stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // intercepts 401 & 403 response
  // Response interceptor to handle errors
  axiosSecure.interceptors.response.use(
    (response) => {
      return response; // Return the response if successful
    },
    async (error) => {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        // console.log("Invalid token. Redirecting to login...");
        // Log the user out
        await logOut();
        // Remove the invalid token from localStorage
        localStorage.removeItem("access-token");
        // Navigate to the login page
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
