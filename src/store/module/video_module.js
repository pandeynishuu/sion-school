
import { axiosApi } from "@/config/axios"

export const state = {
   video : {}
}
export const getters = {
   get_video : (state)=>state.video
}
export const mutations = {
   set_video :(state,data) => state.video = data
}
export const actions = {
   async fetchVideo({commit}){
       try{
           var response = await axiosApi.get("videos")
           console.warn(response.data.data)
       if(response.status==200){
           commit('set_video',response.data.data)
       }
       } catch(e){
           console.warn(e)
       }
   }
}
