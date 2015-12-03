'use strict';

var React = require('react-native');

var {
    Text,
    View
} = React;


var testindex = React.createClass({
    render:function(){
        return(
            <Text>lllllll</Text>
        );
    }
});

React.AppRegistry.registerComponent('SimpleApp', () => testindex);

