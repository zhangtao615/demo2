// pages/submit/submit.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   myDeliveList:[]
  },
  getMyDeliveList:function(){
    wx.showLoading({
      title: '加载中',
    })
  wx.cloud.callFunction({
    // 要调用的云函数名称
    name: 'login',
    success: res => {
      wx.hideLoading();
      db.collection('user').where({
        _openid: res.result.openid,
      })
        .get({
          success: res => {
            this.setData({
              myDeliveList: res.data
            })
          }
        })
    },
    fail: err => {
      // handle error
    },
    complete: () => {
      // ...
    }
  })

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyDeliveList();
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

  }
})