// pages/xiangqing/xiangqing_index.js
Page({
  data: {
    content:[]
  },
  onLoad: function (options) {
    let content=wx.getStorageSync("content");
    this.setData({
      content:content[options.index]
    })
  }
})