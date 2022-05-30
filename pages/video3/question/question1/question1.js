// pages/video3/question/question1/question1.js
var util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    q:"5 + 7 = ?",
    correct:[false,true,false,false],
    checkList:[
      {
        choice: "A",
        ans: "21",
        isChecked: false
      },
      {
        choice: "B",
        ans: "12",
        isChecked: false
      },
      {
        choice: "C",
        ans: "35",
        isChecked: false
      },
      {
        choice: "D",
        ans: "钝角",
        isChecked: false
      }
    ]
  },

  buttonTap(evt){

    
    for(var i=0;i<this.data.checkList.length;i++)
    {
      console.log(this.data.checkList[i].isChecked)
      if(this.data.checkList[i].isChecked!==this.data.correct[i])
      {
        console.log("回答错误")
        util.shotWindow(false)
        return
      }
    }
    console.log("回答正确")
    util.shotWindow(true)
  },
  checkboxTap(evt){
    console.log(evt.target.dataset.index)
    var index = evt.target.dataset.index
    this.data.checkList[index].isChecked = !this.data.checkList[index].isChecked
    this.setData({
      checkList:[...this.data.checkList]
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