//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '快乐21点',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    message1:"简介： 时维大唐开元十一年，圣天子李隆基宽和仁厚，勤政爱民，在其治下，九州河清海晏，宇内升平，中华已渐显盛世气象。在岭南广州城外的白云山上，花木掩映之中，曲径通幽之处，有一座精巧的宅院。",
    message2:"简介： A国南城外的大山之中，有一个与世隔绝的村落，已经享受了百年宁静。但在2032年，有几位不速之客却进入了山村，而前来扶助山村的赵慈善，竟然惨死在了住所之中。是和原住民的冲突，还是和闯入者的纠葛？这个山村还隐藏了什么秘密，一切都等待着公诸于世……",
    message3:"简介： 在Z国的最西边，有一颗巨大的樱花树，直插云霄，树枝又垂下来直直地扎进地面，这棵树，被当地人供奉起来，人们对神圣的东西总是充满了敬畏，在这棵树的5公里之内，没有一间房屋，当地人将神树保护了起来，在周围挖了零零落落的湖泊，建成了森林。",
    message4:"简介： 元历1742年，江夏。江夏无主，五大势力合而王之。五大势力之一的千机阁阁主娄万智，在千机宴当天被谋杀，尸骨无存，而千机阁重地通天楼也在巨大的爆炸中灰飞烟灭，千机阁，已然从鼎盛走向了末路…… "
   
  
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})


