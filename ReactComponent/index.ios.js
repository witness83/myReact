'use strict';

var React = require('react-native');

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


var SimpleApp = React.createClass({
    
    render:function(){
        console.log('in simple with text view  ...');
        return(
                <View style={styles.container}>
                <Text>init React Views</Text>
                </View>
        );
    }
});


module.exports = SimpleApp;
React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
