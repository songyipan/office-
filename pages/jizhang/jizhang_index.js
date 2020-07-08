// pages/jizhang/jizhang_index.js
Page({
  data: {
    money:0,
    flag_monet:0,
    value_ra:0,
    conplist:[
      {
        color:"",
        money:"",
        active:"",
        time:""
      }
    ],
  },
  conplists:[
    {
      color:"",
      money:"",
      active:"",
      time:""
    }
  ],
  conplists_2:[
    {
      color:"",
      money:"",
      active:"",
      time:""
    }
  ],
  onShow(){
    this.conplists=wx.getStorageSync("consumption")||[]
    this.setData({
      conplist:this.conplists
    })
  },
  onLoad: function (options) {
    const money =wx.getStorageSync("money");
    const flag_monet =wx.getStorageSync("flag_monet");
    this.setData({
      money,
      flag_monet
    })
  },
  /* 获取时间的函数 */
  Time(){
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    //获取当前时间
    var n = timestamp * 1000;
    var date = new Date(n);
    var Y = date.getFullYear();
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var zong=Y+" "+M+" "+D+" "+h+":"+m
    return zong
  },
  handleadds(){
    wx.setStorageSync("money", this.data.money);
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  handleflag(){
    wx.setStorageSync("flag_monet", this.data.flag_monet);
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  bindmoney(e){
    const {value}=e.detail
    this.setData({
      money:value
    })
  },
  bindflag(e){
    const {value}=e.detail
    this.setData({
      flag_monet:value
    })
  },
  handlereduce(e){
    var {active}=e.currentTarget.dataset
    var {color}=e.currentTarget.dataset
    const moneys=this.data.money-this.data.value_ra
    wx.setStorageSync("money", moneys);
    //this.conplists.push(this.data.value_ra)
    this.conplists_2[0].color=color
    this.conplists_2[0].money=this.data.value_ra
    this.conplists_2[0].active=active
    this.conplists_2[0].time=this.Time()
    this.conplists.push.apply(this.conplists,this.conplists_2)
    this.setData({
      conplist:this.conplists,
      money:moneys
    })
    wx.setStorageSync("consumption", this.conplists);
    wx.navigateBack({
      delta: 1
    });
  },
  handleadd(e){
    var {active}=e.currentTarget.dataset
    var {color}=e.currentTarget.dataset
    const moneys=parseFloat(this.data.money)+parseFloat(this.data.value_ra)
    wx.setStorageSync("money", moneys);
    //this.conplists.push(this.data.value_ra)
    this.conplists_2[0].color=color
    this.conplists_2[0].money=this.data.value_ra
    this.conplists_2[0].active=active
    this.conplists_2[0].time=this.Time()
    this.conplists.push.apply(this.conplists,this.conplists_2)
    this.setData({
      conplist:this.conplists,
      money:moneys
    })
    wx.setStorageSync("consumption", this.conplists);
    wx.navigateBack({
      delta: 1
    });
  },
  biandbian(e){
    const {value}=e.detail
    this.setData({
      value_ra:value
    })
  }
})