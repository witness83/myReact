'use strict';

var React = require('react-native');

var {
    Text,
    View
} = React;

var MyNvView = require('./forbaseui.js');


var MyReactNativeViewManager = require('react-native').NativeModules.MyReactNativeViewManager;

var styles = React.StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

// <MyReactNativeView nativeValue={'this new react native view...'} style={{height:100,width:100}}></MyReactNativeView>
//react native 向 native传递值
var ForNativeUI = React.createClass({

    render:function(){
        console.log('in simple with text view  ...');
        return(
                <MyNvView onChange={(event)=>{console.log('event is '+event);}} ref='mynavi' nativeValue={'jaaajjjj'} style={{marginTop:100,height:250,width:200,backgroundColor:'red'}}></MyNvView>  
                // <View style={styles.container}>
                // <Text  onPress= {this._onPress}>init React Views</Text>

                // </View>
        );
    },

 
    _onPress:function(){
        //        this.refs.mynavi.nativeValue= 'bbb';
        console.log('out put:'+this.refs.mynavi.nativeValue);
        var value = MyReactNativeViewManager.nativeMethod('abc');
    },
    
    // onRegionChange:function(event){
    //     console.log('event is '+event);
    // },

    componentWillUpdate:function(){
        console.log('this.props is '+this.refs.mynavi);
    },

    componentDidUpdate:function(){
        console.log('in componentDidUpdates');

    },
    componentWillUnmount:function(){
        
        console.log('in componentWillUnmounts');
    }
    
    
});


module.exports = ForNativeUI;
React.AppRegistry.registerComponent('ForNativeUI', () => ForNativeUI);
