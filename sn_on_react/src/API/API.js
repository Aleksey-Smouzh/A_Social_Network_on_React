import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "aa000cc3-fda1-40f5-8750-749fdea93ea7"}
})


export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {

        return instance
         .get(`users?page=${currentPage}&count=${pageSize}`,
          
         )
         .then(response => response.data)
      
     }


}



export default usersAPI

