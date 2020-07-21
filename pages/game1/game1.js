var app=getApp()
function random(min, max) {
 
  return Math.floor(Math.random() * (max - min)) + min;
 
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardnum:3,
    keynum:10,
    keyword:["点头","大笑","坐下","说对不起","递东西","抬头","背靠椅子","摸鼻子","10秒不动","说好的"],
    selected:0,
    lose:false,
    left:0,
    timer: "clock",//定时器名字
    countDownNum: 3,//倒计时初始值
    iscounting:true
  },

    
   countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
     timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
      //每隔一秒countDownNum就减一，实现同步
      countDownNum--;
      //然后把countDownNum存进data，好让用户知道时间在倒计着
      that.setData({
       countDownNum: countDownNum
      })
      //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
      if (countDownNum == 0) {
       //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
       //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
       clearInterval(that.data.timer);
       
       //关闭定时器之后，可作其他处理codes go here
       that.setData({iscounting:false})
      }
     }, 1000)
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({cardnum:app.globalData.userInfo.cardnumber})
    this.setData({left:this.data.cardnum-1})

    //this.setData({selected:random(0,this.keynum)})
    //this.setData({selected:0})
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.countDown();
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  changeClick:function(){
    clearInterval(this.data.timer);
    this.setData({countDownNum: 3})
    var sele=this.data.selected+1
    var nw=this.data.cardnum-1
    if(this.data.selected>=nw){
      this.setData({left:lef})
      this.setData({lose:true})
    }
    else{
      this.setData({iscounting:true})
      this.countDown();
      this.setData({selected:sele})
      var lef=this.data.left-1
      this.setData({left:lef})
    }
    
  },
  changeClick1:function(){
    
    this.setData({selected:0})
    this.setData({left:this.data.cardnum-1})
    this.setData({lose:false})
    this.setData({countDownNum: 3})
    this.setData({iscounting:true})
    this.countDown();
  }
  

})