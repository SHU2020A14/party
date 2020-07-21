//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperImg: [
      {src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1896585040,2308933361&fm=26&gp=0.jpg'},
      {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595156960637&di=7fcb9acd2defdbf031150589fffd4561&imgtype=0&src=http%3A%2F%2Fqiniustatic.wodidashi.com%2Fh5%2Ffront-backstage%2Fjubensha_1542273191000.png'},
      {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594986324559&di=6a07d588daca96de37d2c2d352c0bd48&imgtype=0&src=http%3A%2F%2Fimg.mw8.com%2Flife%2F201703%2F8-1F3311I226.jpg'}
    ],
    gamelist:[
      {
        id: '1001',
        title:'真心话大冒险',
        poster:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594986974706&di=dc712917c56b581a1b0682b70ba2db0a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180120%2F2c93015920bc4baeabe7b2c86a98039c.jpeg',
        introduction:'简介：适合各类人群的派对娱乐，玩家可选择回答真心话中的问题或完成大冒险中的任务，从而增进交流和互动。'
      },
      {
        id: '1002',
        title:'不要做挑战',
        poster:'/images/不要做挑战.png',
        introduction:'简介：适合各类人群的派对娱乐，每个玩家获得一个词语，除自己外所有玩家能看到，其他玩家需引诱该玩家说出该词语，自己应避免说出该词语。'
      },
      {
        id: '1003',
        title:'狼人杀',
        poster:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595245298628&di=db20c318cd5ffcc8a631775efd417823&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F79%2F82%2F5c05c25e1ffb7_610.jpg',
        introduction:'简介：适合年轻人的派对娱乐，玩家随机得到一个身份，好人玩家需要相互配合推理出狼人玩家使其出局，狼人玩家需隐藏身份并在夜里进行攻击。'
      }
    ]
  } ,
  gotogame: function(e){
    let id=e.currentTarget.dataset.id;
    if(id=='1001'){
      wx.navigateTo({
        url: '../trurh_or_dare/truth_or_dare',
      })
    }
    if(id=='1002'){
      wx.navigateTo({
        url: '../dont_do_that/dont_do_that',
      })
    }
  }
})
