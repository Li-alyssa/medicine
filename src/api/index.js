//API进行统一管理
//引入二次封装的axios(带有响应请求拦截器)
import requests from './request';


// export const reqPageList = (page, pageSize) => {
//     //发请求
//     return requests({
//         url: `/mskCommand/mskCommand/showTableList/${page}/${pageSize}`,
//         method: 'get'
//     })
// }

// export const reqDownload = (time) => {
//     return requests({
//         url: `/mskCommand/mskCommand/getdata?time=${time}`,
//         method: 'post'
//     })
// }