// pages/mine/mine.js
function CheckAuth(callback){
  if(wx.getStorageSync('tel')){
    callback()
  }else{
    if(wx.getStorageSync('token')){
      wx.navigateTo({
        url: 'pages/telform/telform',
      })
    }else{
      wx.navigateTo({
        url: 'pages/auth/auth',
      })
    }
  }
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    promptdisplay:"",
    listdisplay:"none"
  },
  handleAuth(){
    wx.getUserProfile({
      desc: '用于完善客人资料',
      success:(res)=>{
        console.log(res)
        wx.setStorageSync('token', res.userInfo)
        this.setData({
          promptdisplay:"none",
          listdisplay:""
        })
      }
    })
  },




  favorHandle(){
    wx.navigateTo({
      url: './favor/favor',
    })
  },
  historyHandle(){
    wx.navigateTo({
      url: './history/history',
    })
  },
  aboutHandle(){
    wx.navigateTo({
      url: './about/about',
    })
  },
  feedbackHandle(){
    wx.navigateTo({
      url: './feedback/feedback',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})