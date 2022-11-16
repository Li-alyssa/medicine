import wx from 'weixin-js-sdk'
import axios from "axios";

// 要用到微信API
function getJSSDK(url, dataForWeixin) {
    // console.log(dataForWeixin)
    // 调用后台接口换取参数
    axios.get('http://plc.bbtcml.com/chinmedy/get_wx_config', {
        params: {
            url,
        },
    }).then((res) => {
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.appId, // 必填，公众号的唯一标识
            timestamp: res.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.nonceStr, // 必填，生成签名的随机串
            signature: res.signature, // 必填，签名
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
        });
        wx.ready(function () {
            //分享给朋友
            wx.updateAppMessageShareData({
                title: dataForWeixin.title,
                desc: dataForWeixin.desc,
                link: dataForWeixin.linkurl,
                imgUrl: dataForWeixin.img,
                success: function () {
                    // 用户确认分享后执行的回调函数
                    // alert('分享成功');
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
            //分享到朋友圈
            wx.updateTimelineShareData({
                title: dataForWeixin.title,
                desc: dataForWeixin.desc,
                link: dataForWeixin.linkurl,
                imgUrl: dataForWeixin.img,
                success: function () {
                    // 设置成功
                    // alert("分享成功！")
                    // console.log("分享成功！")
                },
                cancel: function () {
                    // alert("已取消")
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            })
            wx.error(function () {
                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                // alert("errorMSG:" + res);
            });
        });
    });
}

export default {
    // 获取JSSDK
    getJSSDK,
}
