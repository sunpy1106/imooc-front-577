import axios from 'axios'


console.log(import.meta.env.VITE_BASE_API)

const service = axios.create({
    baseURL: '/api',
    timeout: 5000

})

service.interceptors.request.use(
    config => {
      // 添加 icode
      config.headers.icode = 'C98AFF9965A0BE4C'
      // 必须返回 config
      return config 
    }
)

service.interceptors.response.use((response)=>{
    const{ success,message,data}= response.data
    if (success){
        return data;
    }
    //ToDO
    return Promise.reject( new Error(message))
})


export default service