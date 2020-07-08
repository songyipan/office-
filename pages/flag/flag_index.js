// pages/flag/flag_index.js
Page({
  data: {
    textclass:'',
    flaglist:[
      {
        flagvalue:"",
        color:"",
        number:0
      }
    ],
    flagvalue:" "
  },
  flaglists:[
    {
      flagvalue:"",
      color:"",
      number:0
    }
  ],
  flaglists_2:[
    {
      flagvalue:"",
      color:"",
      number:0
    }
  ],
  flaglists_3:[
    {
      flagvalue:"",
      color:"",
      number:0
    }
  ],
  onLoad: function (options) {
    this.flaglists=wx.getStorageSync("flaglist")||[];
    this.setData({
      flaglist:wx.getStorageSync("flaglist")
    })
    console.log(options)
  },
  onShow: function () {
  this.flaglists=wx.getStorageSync("flaglist")||[];
  this.setData({
    flaglist:wx.getStorageSync("flaglist")
  })
  },
  biandvalue(e){
    const {value}=e.detail
    this.setData({
      flagvalue:value
    })
  },
  /* 改变颜色 */
  handleColor(e){
    var {index}=e.currentTarget.dataset
    this.setData({textclass:index})
    this.flaglists_2[0].color=index
  },
  handleadd(){
    if(this.data.textclass==''){
      wx.showToast({
        title: '选择颜色',
        icon: 'none',
        duration: 2000
      })
      return
    }
    this.flaglists_2[0].flagvalue=this.data.flagvalue
    this.flaglists.push.apply(this.flaglists,this.flaglists_2)
    this.setData({
      flaglist:this.flaglists
    })
    wx.setStorageSync("flaglist", this.flaglists);
    this.flaglists=wx.getStorageSync("flaglist")||[];
  },
  handlede(e){
    const {index}=e.currentTarget.dataset
    this.flaglists_3=this.data.flaglist
    this.flaglists_3.splice(index,1)
    this.setData({
      flaglist:this.flaglists_3
    })
    wx.setStorageSync("flaglist", this.data.flaglist);
  }
})