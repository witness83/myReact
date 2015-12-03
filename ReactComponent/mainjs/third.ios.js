var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    Text,
    View,
} = React;


// var SimpleApp = require('second.ios.js');

var navigation = React.createClass ({
    render: function() {
        return (
                <NavigatorIOS
            style={styles.container}
            initialRoute={{
                component: MyView,
                title: 'My NavigatorIOS test',
                passProps: { myProp: 'foo' },
            }}/>
        );
    },
});


var MyView = React.createClass({
    render: function(){
        console.log('My View render triggered');
        return (
                <View style={styles.wrapper}>
                <Text style={styles.welcome}>
                Hello there, welcome to My View
            </Text>
                </View>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 80
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});


AppRegistry.registerComponent('SimpleApp', () => navigation);
