'use strict';

var React = require('react-native');

var {
    requireNativeComponent
} = require('react-native');

class MyNvView extends React.Component{

    _onChange(event:Event){
        console.log('event in mynvview is '+event);
        this.props.onNativeChange(event);
    };

    render() {
        return  <MyReactNativeView {...this.props} onChange={this._onChange.bind(this)}/>;
    };

};

MyNvView.propTypes ={
    /**
     * the value for ui
     *
     */
    nativeValue:React.PropTypes.string,
    onNativeChange: React.PropTypes.func
};
        


var MyReactNativeView = requireNativeComponent('MyReactNativeView',MyNvView);
module.exports = MyNvView;
