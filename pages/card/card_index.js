// pages/card/card_index.js
Page({

  data: {
    flaglist:[
      {
        flagvalue:"",
        number:0
      }
    ],
    cardlist:[
      {
        data:''
      }
    ],
    index:0
  },
  flaglists:[
    {
      flagvalue:"",
      number:0
    }
  ],
  cardlists:[
    {
      data:''
    }
  ],
  cardlists_2:[
    {
      data:''
    }
  ],
  onLoad: function (options) {
    this.data.index=options.index  /* 获取传来的参数 */
    this.flaglists=wx.getStorageSync("flaglist")||[]
    this.cardlists=wx.getStorageSync("cardlist")||[]
    this.setData({
      flaglist:this.flaglists,
      cardlist:this.cardlists
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
    var zong=Y+"/"+M+"/"+D+"/"+h+":"+m
    return zong
  },

  /* 点击打卡 */
  handlecard(){
    var number2 = this.flaglists[this.data.index].number+1
    this.flaglists[this.data.index].number=number2
    wx.setStorageSync("flaglist", this.flaglists)
    this.getTime()
    wx.showToast({
      title: '今天又进步了',
      icon: 'success',
      duration: 2000
    })
  },
  /* 获取时间并保存时间 */
  getTime(){
    this.cardlists_2[0].data=this.Time()
    this.cardlists=wx.getStorageSync("cardlist")||[];
    this.cardlists.push.apply(this.cardlists,this.cardlists_2)
    wx.setStorageSync("cardlist", this.cardlists)
    this.setData({
      cardlist:this.cardlists
    })
  }
})