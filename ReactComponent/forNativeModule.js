'use strict';

var React = require('react-native');

var NativeModule = require('react-native').NativeModules.NativeModule;

var ForNativeUI = require('./forNativeUI.js');

var {
    Text,
    View
} = React;

var styles = React.StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});


var ForNativeModule = React.createClass({


    getInitialState:function(){
        return {
            value :''
        };
    },

    render:function(){
        console.log('in simple with text view  ...');
        return(
                <View style={styles.container}>
                <Text onPress= {this._pressed}>init React Views only send value</Text>
                <Text onPress= {this._pressed2}>init React Views send value and callback {this.state.value}</Text>
                <Text onPress= {this._pressed3}>third line  {this.state.value}</Text>
                <Text onPress= {this._pressed4} style={{color:'ff8800'}}>jump to Native View</Text>
                </View>
        );
    },


    _pressed:function(){
        console.log('NativeModule is :'+NativeModule);
        var value = NativeModule.nativeParam('abc');

        console.log('value is '+value);
    },

    _pressed2:function(){
        console.log('NativeModule is :'+NativeModule.callNative);
        NativeModule.callNative('Amanda !',(error,newValue)=>{
            if(error){
                console.log('error'+error);
            }else{
                console.log('value is '+newValue);
                this.setState({
                    value:newValue
                });
            }
        });
    },

    _pressed3:function(){
        console.log('this.state.value'+this.state.value);

        this.setState({
            value:this.state.value+'abc'
        });
    },

    _pressed4:function(){
        console.log('pressed 4 ...');
        this.props.navigator.push({
            name: 'fornativeui',
            title: 'forNativeUI',
            component:ForNativeUI
        });
    },

    componentWillUpdate:function(){
        console.log('in componentWillUpdate');

    },
    componentDidUpdate:function(){
        console.log('in componentDidUpdates');

    }


});


module.exports = ForNativeModule;
React.AppRegistry.registerComponent('ForNativeModule', () => ForNativeModule);
