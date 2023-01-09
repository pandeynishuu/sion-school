
import { axiosApi } from "@/config/axios"

export const state = {
   information : {}
}
export const getters = {
   get_information : (state)=>state.information
}
export const mutations = {
   set_information :(state,data) => state.information = data
}
export const actions = {
   async fetchInformation({commit}){
       try{
           var response = await axiosApi.get("information")
       if(response.status==200){
        console.warn(response.data.data)
           commit('set_information',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }
   }
}
