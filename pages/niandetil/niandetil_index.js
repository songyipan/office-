// pages/niandetil/niandetil_index.js
Page({
  data: {
    index:"",
    value:""
  },
  datalist:[
    {
      text:"",
      color:"",
      icon:""
    }
  ],
  onLoad: function (options) {
    var {index}=options
    this.setData({
      index
    })
    this.getValues()
  },
  /* 取出文本内容 */
  getValues(){
    this.datalist= wx.getStorageSync("nian")
    this.setData({
      value:this.datalist[this.data.index].text
    })
  },
  /* 删除文本 */
  handledel(){
    this.datalist.splice(this.data.index,1)
    wx.setStorageSync("nian", this.datalist)
    wx.navigateBack({
      delta: 1
    });
  }
})