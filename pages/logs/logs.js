//Page Object
Page({
    data: {
        userInfo:{},
        userInfo_s:{}
    },
    hadleinfo(){
        wx.showLoading({
            title: "稍等...." ,
            mask: true,
        });
        wx.getUserInfo({
            withCredentials: 'false',
            lang: 'zh_CN',
            timeout:10000,
            success: (result)=>{
                wx.hideLoading();
               this.setData({
                userInfo:result.userInfo
               })
               wx.setStorageSync("userInfo", this.data.userInfo);
               wx.navigateBack({
                   delta: 1
               });
            }
        });
    }
});