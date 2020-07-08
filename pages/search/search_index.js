// pages/search/search_index.js
Page({
  data: {
    contentList:[]
  },
  onShow(){
    this.setData({
      contentList:wx.getStorageSync("content")
    })
  }
})