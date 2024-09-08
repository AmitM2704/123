import axios from "axios";
import { response } from "../../../../server/server_backend/app";

const apiURL = "http://localhost:3000";

const user = {
    username : "",
    password : "",
    email : ""
}
const register=(user) =>{
    try{
        const response = axios.post(`${apiURL}/user/register`,user);
        return response.data;
    }
    catch(error){
        return error;
    }
    };
const login = (username,password)=>{
    return axios.post(`${apiURL}`+"login",{username,password}).then((response)=>{
        if (response.data.username){
            localStorage.setItem("user",JSON.stringify(response.data));
        }
        return response.data;
    });
};
const logout =()=>{
    localStorage.removeItem("user");
    return axios.post(`${apiURL}`="signout").then((response) => {
        return response.data;
    });
}

const getCurrentUser=()=>{
    return JSON.parse(localStorage.getItem("user"));
}

const AuthService ={
    register,
    login,
    logout,
    getCurrentUser
}