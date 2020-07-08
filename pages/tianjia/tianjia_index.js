// pages/tianjia/tianjia_index.js
Page({
  data: {
    textlist:"",
    inputlist:"",
    index:"",
    image:""
  },
  contentlist:[
    {
      textlist:"",
      inputlist:"",
      image:""
    }
  ],
  contentlistA:[],
  text2:[],
  onShow(){
      this.contentlistA=wx.getStorageSync("content")||[]
  },
  onLoad(options){
    const {index}=options
    this.setData({
      index
    })
  },
  handletext(e){
    const {value}=e.detail
    this.setData({
      textlist:value
    })
  },
  handleinput(e){
    const {value}=e.detail
    this.setData({
      inputlist:value
    })
  },
  handleiamge(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success: (result)=>{
        this.setData({
          image:result.tempFilePaths[0]
        })
      }
    });
  },
  handelbtn(){
    if(!this.data.textlist){
      wx.showToast({
        title: '内容不能没有哦....',
        icon: 'none'
      })
      return
    }if(!this.data.inputlist){
      wx.showToast({
        title: '标题不能没有哦....',
        icon: 'none'
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '确定不写了吗....',
        showCancel: true,
        cancelText: '取消',
        cancelColor: '#000000',
        confirmText: '确定',
        confirmColor: '#3CC51F',
        success: (result) => {
          if(result.confirm){
            this.contentlist[0].textlist=this.data.textlist
            this.contentlist[0].inputlist=this.data.inputlist
            this.contentlist[0].image=this.data.image
            this.contentlist.push.apply(this.contentlist,this.contentlistA)
            wx.setStorageSync("content", this.contentlist)
            this.setData({
              textlist:""
            })
            wx.navigateBack({
              delta: 1
            });
          }else{
            wx.showToast({
              title: '继续写写吧~~',
              icon: 'none'
            })
            return
          }
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
  }
})