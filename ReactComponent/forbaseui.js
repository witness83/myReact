'use strict';

var React = require('react-native');

var {
    requireNativeComponent
} = require('react-native');

class MyNvView extends React.Component{
    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event:Event){
        if (!this.props.onRegionChange) {
            return;
        }
        this.props.onRegionChange(event.nativeEvent.region);
    };

    render() {
        return  <MyReactNativeView {...this.props}/>;
    }

};

MyNvView.propTypes ={
    /**
     * the value for ui
     *
     */
    nativeValue:React.PropTypes.string,
    onRegionChange: React.PropTypes.func
};
        


var MyReactNativeView = requireNativeComponent('MyReactNativeView',MyNvView);
module.exports = MyNvView;
