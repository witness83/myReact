'use strict'

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Navigator
} = React;

var MineView = React.createClass({

    render:function(){
        console.log('minevie render');
        return (
                <NavigatorIOS
            style={styles.container}
            initialRoute={{
                component: TextSimple,
                title: 'My NavigatorIOS page 2xb',
                passProps: { myProp: 'foo' }
            }}
                />
        )
    }
});

var MyViewWithOutNav = React.createClass({
    render:function(){
        return(
                <View style={styles.container}>
                <Text style={styles.welcome}>
                Hello there, welcome to My View</Text>
                </View>
        )
    }
});

var MyView = React.createClass({
    render: function(){
        console.log('pass props is '+this.props.lala);
       

        console.log('My View render triggered');
        return(
                <View style={styles.container} >
                <Text style={styles.welcome} > Hello there, welcome to My View</Text>
                <Text style={styles.welcome} > Hello there, welcome to My View</Text>
                <Text style={styles.welcome} onPress={()=>{console.log('pressed');}}> Hello there, welcome to My View</Text>
                </View>);
    }
});


var TextSimple = React.createClass({
    render:function(){
        console.log('in simple with text view  ...');
        return(
                <View style={styles.container} >
                <Text>this is bbbbb</Text>
                <Text>this is bbbbb</Text>
                <Text>this is bbbbb</Text>
                <Text>this is ggggglal</Text>
                <Text>this is bbbbb</Text>
                <Text>this is bbbbb</Text>
                <Text>this isffff bbbbb</Text>
                <Text>this is bbbfffbb</Text>
                <Text>this is bbbbb</Text>
                <Text>this is bbbbb</Text>

                </View>
        );
    }
});

var styles = React.StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});


//module.exports = MineView;
//module.exports = TextSimple;
module.exports = MyView;

// React.AppRegistry.registerComponent('MineView', () => MineView);
// React.AppRegistry.registerComponent('MyView', () => MyView);
// React.AppRegistry.registerComponent('TextSimple', () => TextSimple);
