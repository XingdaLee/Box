'use strict'
import React,{Component}from 'react';
import{
  AppRegistry
} from 'react-native';
//1、网易
// var appForWangyi=require('./wangyi/main');
// AppRegistry.registerComponent('Box',() => appForWangyi);
//2、携程
// var appForCtrip=require('./ctrip/main');
// AppRegistry.registerComponent('Box',() => appForCtrip);
//3、列表页跳转
// var NV=require('./navigator/main');
// AppRegistry.registerComponent('Box',() => NV);
//4、TextInput:输入框p113
// var appForGaode=require('./TextInput/main');
// AppRegistry.registerComponent('Box',() => appForGaode);
//5、AutomaticallyPrompts:自动提示功能p114
// var autoForApp=require('./AutomaticallyPrompts/main');
// AppRegistry.registerComponent('Box',() => autoForApp);
//6、Touchable:点击时背景阴影效果的背景颜色p121
// var TouchableApp=require('./TouchableClass/main');
// AppRegistry.registerComponent('Box',() => TouchableApp);
//7、TouchableOpacityApp:点击时不用设置背景色，也可呈现上面的效果p123
// var TouchableOpacityApp=require('./TouchableOpacity/main');
// AppRegistry.registerComponent('Box',() => TouchableOpacityApp);
//8、Image:设置图片链接p125
// var ImageForApp=require('./ImageClass/main');
// AppRegistry.registerComponent('Box',() => ImageForApp);
//9、TabBarIos:类似于QQtab切换p129
// var TabBarForApp=require('./TabBarIosClass/main');
// AppRegistry.registerComponent('Box',() => TabBarForApp);
//10、WebView:加载外链网址或者本地的htmlp133
// var WebViewForApp=require('./WebViewClass/main');
// AppRegistry.registerComponent('Box',() => WebViewForApp);
//11、appForweibo:加载微博OAuth授权登陆p137
// var appForweibo=require('./WeiBoOAuth/main');
// 打印runApplication函数的定义
// alert(AppRegistry.runApplication);
// AppRegistry.registerComponent('Box',() => appForweibo);
//12，购物车AsyncStorage类似于localStorage的使用
// var ShoppingCart=require('./ShoppingCart/main');
// AppRegistry.registerComponent('Box',() => ShoppingCart);
// 13、AlertIOS弹窗和用户在弹窗中输入数据
// var AlertIosForApp=require('./AlertIOS/main');
// AppRegistry.registerComponent('Box',() => AlertIosForApp);
// 14、ActionSheetIOS分享栏和拨打电话等
// var ActionSheetIOSForApp=require('./ActionSheetIOS/main');
// AppRegistry.registerComponent('Box',() => ActionSheetIOSForApp);
// 15、PixelRatio，获取像素密度
// var PixelRatioForApp=require('./PixelRatio/main');
// AppRegistry.registerComponent('Box',() => PixelRatioForApp);
// 16、StatusBarIosForApp 显示连接互联网时的小圈圈
// var StatusBarIosForApp=require('./StatusBarIOS/main');
// AppRegistry.registerComponent('Box',() => StatusBarIosForApp);
// 17、NetInfoForApp 获取当前的网络状态是wifi还是3g等，并有监听事件
// var NetInfoForApp=require('./NetInfo/main');
// AppRegistry.registerComponent('Box',() => NetInfoForApp);
// 18、CameraRollForApp 读取和保存照片
// var CameraRollForApp=require('./CameraRoll/main');
// AppRegistry.registerComponent('Box',() => CameraRollForApp);
// 19、cameraApp 调用相机
// var cameraApp=require('./ReactCamera/main');
// AppRegistry.registerComponent('Box',() => cameraApp);
// 20、VibrationForApp 手机震动
// var VibrationForApp=require('./VibrationIOS/main');
// AppRegistry.registerComponent('Box',() => VibrationForApp);
// 21、geolocationForApp 获取位置
// var geolocationForApp=require('./Geolocation/main');
// AppRegistry.registerComponent('Box',() => geolocationForApp);
// 22、HttpForApp HTTP请求
var HttpForApp=require('./XMLHttpRequest/main');
AppRegistry.registerComponent('Box',() => HttpForApp);
// 23、SuperagentForApp 第三方的HTTP请求
// var SuperagentForApp=require('./SuperagentHttp/main');
// AppRegistry.registerComponent('Box',() => SuperagentForApp);
// 24、ReactAnimationForApp 动画
// var ReactAnimationForApp=require('./ReactAnimation/main');
// AppRegistry.registerComponent('Box',() => ReactAnimationForApp);
// 25、swiper 轮播
// var swiper=require('./Swiper/main');
// AppRegistry.registerComponent('Box',() => swiper);
// 26、OpenModalForApp modal
// var OpenModalForApp=require('./OpenModal/main');
// AppRegistry.registerComponent('Box',() => OpenModalForApp);
