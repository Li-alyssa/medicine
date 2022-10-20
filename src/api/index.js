//API进行统一管理
//引入二次封装的axios(带有响应请求拦截器)
import requests from './request';
import {formatDate} from "element-ui";

const rankPrefix = "/rank"

//公司列表接口
export const reqGetCompanyList = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/company/`,
        method: 'post',
        data
    })
}

//产品列表接口
export const reqGetProductList = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/product/`,
        method: 'post',
        data
    })
}

//产品详情接口
export const reqGetProductInfo = (id) => {
    //发请求
    return requests({
        url: `${rankPrefix}/product/${id}`,
        method: 'get'
    })
}

//产品介绍接口
export const reqGetProductIntroduction = (id) => {
    //发请求
    return requests({
        url: `${rankPrefix}/introduction/${id}`,
        method: 'get'
    })
}

//产品/公司论文列表接口
export const reqGetCompanyOrProductPaper = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/paper/`,
        method: 'post',
        data
    })
}

//产品/公司专利列表接口
export const reqGetCompanyOrProductPatent = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/patent/`,
        method: 'post',
        data
    })
}

//产品排行接口
export const reqGetProductRanking = (id) => {
    //发请求
    return requests({
        url: `${rankPrefix}/ranking/${id}`,
        method: 'get'
    })
}

//公司项目列表接口
export const reqGetCompanySupport = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/support/`,
        method: 'post',
        data
    })
}

//公司获奖列表接口
export const reqGetCompanyAward = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/award/`,
        method: 'post',
        data
    })
}

//公司指南列表接口
export const reqGetCompanyGc = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/gc/`,
        method: 'post',
        data
    })
}

//排行榜接口
export const reqGetRanking = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/ranking/`,
        method: 'post',
        data
    })
}

//上传图片接口
export const reqUpLoadPhoto = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/picture/upload`,
        method: 'post',
        data
    })
}

//添加图片接口
export const reqAddUpLoadPhoto = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/picture/`,
        method: 'post',
        data
    })
}

//查询图片接口
export const reqCheckUpLoadPhoto = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/picture/list`,
        method: 'post',
        data
    })
}

//下载图片接口
export const reqDownloadUpLoadPhoto = (serial) => {
    //发请求
    return requests({
        url: `${rankPrefix}/picture/download/${serial}`,
        method: 'get',
        responseType: 'blob'
    })
}

// 产品评价接口
export const reqRecommend = (data) => {
    //发请求
    return requests({
        url: `${rankPrefix}/product/recommend`,
        method: 'post',
        data
    })
}

// 请求登录二维码
export const reqLoginQrCode = (redirectUrl) => {
    return requests({
        url: "/login/wxAuthorizeUrl?code=" + Date.now() + `&url=${redirectUrl}`,
        method: 'post'
    })
}

// 登录请求
export const reqDoLogin = (user) => {
    let formData = new FormData();
    for (let key in user) {
        formData.append(key, user[key]);
    }
    return requests({
        url: "/doLogin",
        method: 'post',
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

// 登录请求
export const reqDoLogout = () => {
    return requests({
        url: "/logout",
        method: 'get',
    })
}

// 手机端登录回调
export const mobileDoLoginCallBack = (data) => {
    let formData = new FormData();
    for (let key in data) {
        formData.append(key, data[key]);
    }
    return requests({
        url: "/login/wxCallBack",
        method: 'post',
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

// 手机端登录回调
export const loadCurrentUser = () => {
    return requests({
        url: "/user/currentUser",
        method: 'get'
    })
}