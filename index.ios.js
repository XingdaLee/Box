'use strict'
import React,{Component}from 'react';
import{
  AppRegistry,
  StyleSheet,
  View,
  Text,
  PixelRatio
} from 'react-native';
var Header=require('./wangyi/header');
var styles=StyleSheet.create({
  flex:{
    flex:1
  },
  list_item:{
    height:40,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    justifyContent:'center'
  },
  list_item_font:{
    fontSize:16
  },
  news_item:{
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:20
  },
  news_title:{
    fontSize:20,
    fontWeight:'bold',
    color:'#CD1D1C',
    marginLeft:10,
    marginTop:15
  }
});
var List=React.createClass({
  render:function(){
    return(
      <View style={styles.list_item}>
        <Text style={styles.list_item_font}>
          {this.props.title}
        </Text>
      </View>
    )
  }
});
// numberOfLines标题最多显示两行.多的用省略号表示
var ImportantNews=React.createClass({
  show:function(title){
    alert(title);
  },
  render:function(){
    var news=[];
    for (var i in this.props.news) {
      var text=(
        <Text
          onPress={this.show.bind(this,this.props.news[i])}
          numberOfLines={1}
          style={styles.news_item}
          key={i}>
          {this.props.news[i]}
        </Text>
      );
      news.push(text)
      // debugger
    }
    return (
      <View style={styles.flex}>
        <Text style={styles.news_title}>今日要闻</Text>
        {news}
      </View>
    )
  }
});
var app=React.createClass({
  render:function(){
    var news = [
        '1、刘慈欣《三体》获“雨果奖”为中国作家首次',
        '2、京津冀协同发展定位明确：北京无经济中心表述',
        '3、好奇宝宝第一次淋雨，父亲用镜头记录了下来',
        '4、京津冀协同发展定位明确：:北京无经济中心表述+好奇宝宝第一次淋雨，父亲用镜头记录了下来'
       ];
    var titleData=[
      '这是第1个List_item',
      '这是第2个List_item',
      '这是第3个List_item',
      '这是第4个List_item',
    ];
    return(
      <View style={styles.flex}>
        <Header></Header>
        <List title='这是第1个List_item'></List>
        <List title='这是第2个List_item'></List>
        <List title='这是第3个List_item'></List>
        <List title='这是第4个List_item'></List>
        <List title='这是第5个List_item'></List>
        <ImportantNews news={news}>
        </ImportantNews>
      </View>
    );
  }
});
AppRegistry.registerComponent('Box',() => app);
