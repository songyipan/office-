// pages/shannian/shannian_index.js
Page({
  data: {
    textclass:"",
    textlist:[
      {
        text:"",
        color:"",
        icon:""
      }
    ]
  },
  textlists:[
    {
      text:"",
      color:"",
      icon:""
    }
  ],
  textlists_2:[
    {
      text:"",
      color:"",
      icon:""
    }
  ],
  onLoad: function (options) {
    this.textlists=wx.getStorageSync("nian")||[]
    this.setData({
      textlist:this.textlists
    })
  },
  onShow: function () {
    this.textlists=wx.getStorageSync("nian")||[]
    this.setData({
      textlist:this.textlists
    })
  },
  /* 获取文本域内容 */
  handletext(e){
    var {value}=e.detail
    var basic = value;
    var str = value
    /* 截取字符串最后两位 */
    var str2 = str.substr(-2,str.length)  
    if(basic.length==2){
      this.textlists_2[0].text=basic
    }else if(str2=='保存'){
      /* 删除字符串后两位的"保存" */
      basic = basic.substr(0, basic.length - 2);  
      this.textlists_2[0].text=basic
    }else{
      this.textlists_2[0].text=basic
    }
    if(str2=='保存'){
      this.handleDeposit()
    }
  },
  /* 颜色改变 */
  handleColor(e){
    var {index}=e.currentTarget.dataset
    var {color}=e.currentTarget.dataset
    var {icon}=e.currentTarget.dataset
    this.textlists_2[0].icon=icon
    this.textlists_2[0].color=color
    this.setData({textclass:index})
  },
  /* 保存文本内容 */
  handleDeposit(){
    this.textlists=wx.getStorageSync("nian")||[]
    this.textlists.push.apply(this.textlists,this.textlists_2)
    this.setData({
      textlist:this.textlists.reverse()
    })
    wx.setStorageSync("nian", this.textlists)
  }
})