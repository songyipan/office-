//Page Object
Page({
  data: {
    userinfo:{}
  },
  //options(Object)
  onShow(){
    const userinfo=wx.getStorageSync("userInfo");
    this.setData({
      userinfo
    })
  }
});