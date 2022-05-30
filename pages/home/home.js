// pages/home/home.js
Page({
  data: {
    videolist:["video1","video2","video3"],
    current:0
  },
  handleTap(evt){
    console.log(evt.currentTarget.dataset.myid);
    this.setData({
        current:evt.currentTarget.dataset.myid
      })
    if(evt.currentTarget.dataset.myid===0){
      wx.navigateTo({
          url: '/pages/video1/video1',
      })
    }
    if(evt.currentTarget.dataset.myid===1){
      wx.navigateTo({
          url: '/pages/video2/video2',
      })
    }
    if(evt.currentTarget.dataset.myid===2){
      wx.navigateTo({
          url: '/pages/video3/video3',
      })
    }

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