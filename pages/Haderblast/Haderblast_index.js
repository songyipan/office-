// pages/Haderblast/Haderblast_index.js
Page({
  data: {
    active:'',
    /* 控制是否可移动的事件 */
    all:'all',
    disabled:false,
    /* 原数组 */
    /* let:[
      { */
        let1:0,
        let2:0,
        let3:0,
        let4:0,
        let5:0,
        let6:0,
        let7:0,
        let8:0
     /*  }
    ] */,
    /* 循环添加数 */
    lets_1:1
  },
  /* 要拼接的数组 */
  lets_2:[
    {
      let1:0,
      let2:0,
      let3:0,
      let4:0,
      let5:0,
      let6:0,
      let7:0,
      let8:0
    }
  ],
  /* 拼接中间数组 */
  lets_3:[
    {
      let1:0,
      let2:0,
      let3:0,
      let4:0,
      let5:0,
      let6:0,
      let7:0,
      let8:0
    }
  ],
  onLoad: function (options) {

  },
  /* 鼠标抬起的事件 */
  handletouch(){
    this.setData({
      disabled:true
    })
  },
  /* 改变let的数值从而实现组件复制 */
  handlelet(){
    var lets_1=this.data.lets_1+1
    this.setData({
      lets_1
    })
  },
  /* 改变active的值选择tool */
  handleactiv(e){
    var{active}=e.currentTarget.dataset
    this.setData({
      active
    })
    if(active==1){
      this.lets_2[0].let1=1;
    }
    if(active==2){
      this.lets_2[0].let2=2;
    }
    if(active==3){
      this.lets_2[0].let1=3;
    }
    if(active==4){
      this.lets_2[0].let2=4;
    }
    if(active==5){
      this.lets_2[0].let1=5;
    }
    if(active==6){
      this.lets_2[0].let2=6;
    }
    if(active==7){
      this.lets_2[0].let1=7;
    }
    if(active==8){
      this.lets_2[0].let2=8;
    }
    this.handlelet()
  }
})